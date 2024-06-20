const fs = require("fs");
const path = require("path");

const COMPONENT_NAME = process.env["COMPONENT_NAME"];
const COMPONENT_TYPE = process.env["COMPONENT_TYPE"];
const COMPONENTS_SETTINGS_DIR = process.env["COMPONENTS_SETTINGS_DIR"];

let executed = true;

try {
  const cssVars = JSON.parse(
    fs.readFileSync(
      path.join(
        COMPONENTS_SETTINGS_DIR,
        COMPONENT_TYPE,
        COMPONENT_NAME,
        "css-vars.json"
      ),
      "utf8"
    )
  );

  let extendedCssVars = {};
  const settings = JSON.parse(
    fs.readFileSync(
      path.join(
        COMPONENTS_SETTINGS_DIR,
        COMPONENT_TYPE,
        COMPONENT_NAME,
        "mbx-settings.json"
      ),
      "utf8"
    )
  );

  if (settings.cssVars && settings.cssVars.cssName) {
    const componentsToExtend = settings.cssVars.extend.components || [];

    componentsToExtend
      .filter((componentsToExtend) => componentsToExtend.cssName)
      .forEach((componentToExtend) => {
        const replaceCallback = (inputString) =>
          inputString.replaceAll(
            `--mbx-${componentToExtend.cssName}`,
            `--mbx-${settings.cssVars.cssName}-${componentToExtend.cssName}`
          );
        const component = componentToExtend.name;
        const componentType = componentToExtend.type || COMPONENT_TYPE;

        const externalCssVars = require("../components/" +
          componentType +
          "/" +
          component +
          "/css-vars.json");
        Object.keys(externalCssVars).forEach((externalCssVar) => {
          const cssVarName = replaceCallback(externalCssVar);
          extendedCssVars[cssVarName] = {};
          extendedCssVars[
            cssVarName
          ].description = `Extended from [${component}](../../${componentType}/${component}/index.md) - ${externalCssVars[externalCssVar].description}`;

          if (!cssVarName.endsWith("-dark") && !cssVarName.endsWith("-light")) {
            extendedCssVars[cssVarName].description = replaceCallback(
              extendedCssVars[cssVarName].description
            );
          } else {
            extendedCssVars[cssVarName].fallback = replaceCallback(
              externalCssVars[externalCssVar].fallback
            );
            extendedCssVars[cssVarName].defaultExternal = {
              type: componentType,
              prop: externalCssVar,
              component: component,
            };
          }
        });
      });
  }

  const cssVariables = { ...cssVars, ...extendedCssVars };

  if (executed) {
    fs.writeFileSync(
      path.join(
        COMPONENTS_SETTINGS_DIR,
        COMPONENT_TYPE,
        COMPONENT_NAME,
        "css-vars.json"
      ),
      JSON.stringify({ ...cssVariables })
    );
  }
} catch (e) {
  console.log(e);
}
