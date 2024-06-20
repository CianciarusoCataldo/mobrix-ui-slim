/**
 * Supported environment when parsing code string. Every environment contains its specific colors for some specific code word (like `import`)
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export const CODE_LANGUAGES = {
  common: {
    DEFAULT_VALUE: "#FFFFF",
    STRING: "#f6713c",
  },
  javascript: {
    import: "#d81313",
    from: "#d81313",
    function: "#d81313",
    if: "#d81313",
    else: "#d81313",
    try: "#d81313",
    catch: "#d81313",
    while: "#d81313",
    export: "#d81313",
    default: "#3b82f6",
    const: "#2432f5",
    for: "#d81313",
    forEach: "#d81313",
    COMPONENT_DECLARATION: "#3b82f6",
  },
  python: {
    pip: "#5b9306",
    def: "#5b9306",
    __main__: "#5b9306",
  },
  terminal: {
    sh: "#5b9306",
    npm: "#5b9306",
    npx: "#5b9306",
    node: "#5b9306",
    git: "#5b9306",
    "gh-pages": "#d81313",
    docker: "#d81313",
    ls: "#d81313",
    cd: "#d81313",
    jq: "#d81313",
    cat: "#d81313",
    curl: "#d81313",
    "apt-get": "#d81313",
    apt: "#d81313",
    wget: "#d81313",
    aws: "#d81313",
    cp: "#d81313",
    rm: "#d81313",
  },
};
