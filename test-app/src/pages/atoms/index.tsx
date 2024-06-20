import React from "react";
import {
  Button,
  CheckBox,
  CodeBox,
  Container,
  Counter,
  Divider,
  Input,
  Label,
  Link,
  RadioButton,
  Rater,
  Selector,
  Slider,
  Spinner,
  Toggle,
} from "../../mobrix-ui-preview";

import tick from "../../assets/tick.png";
import { BooleanProp, Demo, SelectProp } from "@cianciarusocataldo/demo-ui";

const AtomsPage = () => {
  const ComponentDemo = ({
    Component,
    name,
  }: {
    Component: JSX.Element;
    name: string;
  }) => {
    return (
      <Container
        shadow={false}
        background={false}
        style={{
          padding: "0.5rem",
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Label dark style={{ fontSize: "24px" }}>
          {name}
        </Label>
        {Component}
      </Container>
    );
  };

  return (
    <Container
      shadow={false}
      background={false}
      className="App"
      dark
      style={{ height: "110%" }}
    >
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button animated={false}>Button light not animated</Button>
            <div style={{ marginTop: "20px" }} />
            <Button animated={false} dark>
              Button dark not animated
            </Button>
            <div style={{ marginTop: "20px" }} />
            <Button background={false} dark>
              Button dark no background
            </Button>
            <div style={{ marginTop: "20px" }} />
            <Button>Button light animated</Button>
            <div style={{ marginTop: "20px" }} />
            <Button animated dark>
              Button dark animated
            </Button>
            <div style={{ marginTop: "20px" }} />
            <Button animated dark disabled>
              Button dark animated disabled
            </Button>
            <div style={{ marginTop: "20px" }} />
            <Button
              className="test-class"
              background={false}
              animated={false}
              onClick={() => alert("clicked")}
            >
              <svg
                x={0}
                y={0}
                viewBox="0 0 64 64"
                xmlSpace="preserve"
                width="30px"
                height="30px"
              >
                <circle cx={32} cy={32} r={32} fill="var(--svgexternalcolor)" />
                <g className="wrapper">
                  <path
                    className="external"
                    d="M32 52c-9.9 0-18-8.1-18-18 0-6.4 3.4-12.3 8.9-15.5 1-.6 2.2-.2 2.7.7.6 1 .2 2.2-.7 2.7C20.7 24.4 18 29.1 18 34c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.1-2.7-9.7-7.2-12.2-1-.5-1.3-1.8-.8-2.7.5-1 1.8-1.3 2.7-.8C46.5 21.5 50 27.5 50 34c0 9.9-8.1 18-18 18z"
                  />
                </g>
                <g className="wrapper">
                  <path
                    className="external"
                    d="M32 36c-1.1 0-2-.9-2-2V14c0-1.1.9-2 2-2s2 .9 2 2v20c0 1.1-.9 2-2 2z"
                  />
                </g>
                <path
                  className="internal"
                  d="M39.8 18c4.9 2.7 8.2 8 8.2 14 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-5.9 3.2-11 7.9-13.8M32 32V12"
                />
              </svg>
            </Button>
          </div>
        }
        name="Button"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CheckBox />
            <div style={{ marginTop: "20px" }} />
            <CheckBox value={true} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox icon={<img alt="" src={tick} width="30px" />} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox dark />
            <div style={{ marginTop: "20px" }} />
            <CheckBox dark value={true} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox dark icon={<img alt="" src={tick} width="30px" />} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox
              background={false}
              style={{
                background: "white",
                borderWidth: "2px",
                borderRadius: "30%",
              }}
              icon={<img alt="" src={tick} width="30px" />}
            />
            <CheckBox
              background={false}
              icon={<img alt="" src={tick} width="30px" />}
            />
            <div style={{ marginTop: "20px" }} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox disabled value={true} />
            <div style={{ marginTop: "20px" }} />
            <CheckBox dark disabled value={true} />
          </div>
        }
        name="CheckBox"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <CodeBox />
            <div style={{ marginTop: "20px" }} />
            <CodeBox copyButton={false} value="npm i mobrix ui" />
            <div style={{ marginTop: "20px" }} />
            <CodeBox
              highlight
              value={`npm i mobrix ui
"string" 'kkk'"string"'
npx
apt update
apt-get install
aws s3 sync
npx`}
            />
            <div style={{ marginTop: "20px" }} />
            <CodeBox
              highlight
              value={`npm i mobrix ui\n "string" 'kkk'"string"' npx apt update apt-get install aws s3 sync npx`}
            />
            <div style={{ marginTop: "20px" }} />
            <CodeBox dark />
            <div style={{ marginTop: "20px" }} />
            <CodeBox dark copyButton={false} value="npm i mobrix ui" />
            <div style={{ marginTop: "20px" }} />
            <CodeBox highlight dark value="npm i mobrix ui" />
            <div style={{ marginTop: "20px" }} />
            <CodeBox highlight disabled value="npm i mobrix ui" />
            <div style={{ marginTop: "20px" }} />
            <CodeBox highlight disabled dark value="npm i mobrix ui" />
            <div style={{ marginTop: "20px" }} />
            <CodeBox
              copyButton={false}
              background={false}
              value="npm i mobrix ui"
            />
            <div style={{ marginTop: "20px" }} />
            <CodeBox highlight background={false} value="npm i mobrix ui" />
          </div>
        }
        name="CodeBox"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Counter />
            <div style={{ marginTop: "20px" }} />
            <Counter animated value={35} />
            <div style={{ marginTop: "20px" }} />
            <Counter background={false} value={35} />
            <div style={{ marginTop: "20px" }} />
            <Counter dark />
            <div style={{ marginTop: "20px" }} />
            <Counter animated dark value={35} />
            <div style={{ marginTop: "20px" }} />
            <Counter disabled value={35} />
            <div style={{ marginTop: "20px" }} />
            <Counter dark disabled value={35} />
          </div>
        }
        name="Counter"
      />
      <ComponentDemo
        Component={
          <div
            style={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <p></p>
            <Divider />
            <p></p>
            <Divider dark animated={false} />
          </div>
        }
        name="Divider"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Input autoresizable />
            <div style={{ marginTop: "20px" }} />
            <Input value="text" onChange={(value) => console.log(value)} />
            <div style={{ marginTop: "20px" }} />
            <Input value="text" background={false} />
            <div style={{ marginTop: "20px" }} />
            <Input readOnly value="readonly" />
            <div style={{ marginTop: "20px" }} />
            <Input disabled value="disabled" />
            <div style={{ marginTop: "20px" }} />
            <Input dark disabled value="disabled" />
            <div style={{ marginTop: "20px" }} />
            <Input dark />
            <div style={{ marginTop: "20px" }} />
            <Input dark value="text" />
            <div style={{ marginTop: "20px" }} />
            <Input background={false} value="text" />
          </div>
        }
        name="Input"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Label children="text" />
            <div style={{ marginTop: "20px" }} />
            <Label dark children="text" />
            <div style={{ marginTop: "20px" }} />
            <Label disabled children="disabled" />
            <div style={{ marginTop: "20px" }} />
            <Label disabled dark children="disabled" />
          </div>
        }
        name="Label"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              children="text"
            />
            <div style={{ marginTop: "20px" }} />
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              dark
              children="text"
            />
            <div style={{ marginTop: "20px" }} />
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              disabled
              children="disabled"
            />
            <div style={{ marginTop: "20px" }} />
            <Link
              newTab
              to="https://github.com/CianciarusoCataldo/mobrix-ui"
              dark
              disabled
              children="disabled"
            />
          </div>
        }
        name="Link"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <RadioButton />
            <div style={{ marginTop: "20px" }} />
            <RadioButton deselectable={false} />
            <div style={{ marginTop: "20px" }} />
            <RadioButton dark />
            <div style={{ marginTop: "20px" }} />
            <RadioButton dark deselectable={false} />
            <div style={{ marginTop: "20px" }} />
            <RadioButton disabled />
            <div style={{ marginTop: "20px" }} />
            <RadioButton dark disabled />
            <div style={{ marginTop: "20px" }} />
            <RadioButton background={false} />
            <div style={{ marginTop: "20px" }} />
            <RadioButton background={false} deselectable={false} />
            <div style={{ marginTop: "20px" }} />
            <RadioButton hover={false} />
            <div style={{ marginTop: "20px" }} />
            <RadioButton dark hover={false} />
            <div style={{ marginTop: "20px" }} />
          </div>
        }
        name="RadioButton"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Rater />
            <div style={{ marginTop: "20px" }} />
            <Rater dark value={4} readonly />
            <div style={{ marginTop: "20px" }} />
            <Rater vertical />
            <div style={{ marginTop: "20px" }} />
            <Rater disabled value={3} />
            <div style={{ marginTop: "20px" }} />
            <Rater disabled dark value={4} />
            <div style={{ marginTop: "20px" }} />
            <Rater background={false} value={3} />
          </div>
        }
        name="Rater"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Selector />
            <div style={{ marginTop: "20px" }} />
            <Selector elements={["el1", "el2"]} />
            <div style={{ marginTop: "20px" }} />
            <Selector background={false} elements={["el1", "el2"]} />
            <div style={{ marginTop: "20px" }} />
            <Selector dark elements={["el1", "el2"]} />
            <div style={{ marginTop: "20px" }} />
            <Selector disabled elements={["el1", "el2"]} />
            <div style={{ marginTop: "20px" }} />
            <Selector disabled dark elements={["el1", "el2"]} />
          </div>
        }
        name="Selector"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Slider />
            <div style={{ marginTop: "20px" }} />
            <Slider value={32} />
            <div style={{ marginTop: "20px" }} />
            <Slider dark />
            <div style={{ marginTop: "20px" }} />
            <Slider dark value={32} />
            <div style={{ marginTop: "20px" }} />
            <Slider disabled value={32} />
            <div style={{ marginTop: "20px" }} />
            <Slider disabled dark value={52} />
            <div style={{ marginTop: "20px" }} />
            <Slider background={false} />
            <div style={{ marginTop: "20px" }} />
            <Slider background={false} value={32} />
          </div>
        }
        name="Slider"
      />

      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Demo
              props={{
                value: SelectProp({
                  success: "success",
                  error: "error",
                  loading: "loading",
                }),
                dark: BooleanProp(false),
              }}
              children={(props, setProps) => <Spinner {...props} />}
            />
          </div>
        }
        name="Spinner"
      />
      <ComponentDemo
        Component={
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Toggle />
            <div style={{ marginTop: "20px" }} />
            <Toggle background={false} />
            <div style={{ marginTop: "20px" }} />
            <Toggle value={false} />
            <div style={{ marginTop: "20px" }} />
            <Toggle dark />
            <div style={{ marginTop: "20px" }} />
            <Toggle dark value={false} />
            <div style={{ marginTop: "20px" }} />
            <Toggle disabled />
            <div style={{ marginTop: "20px" }} />
            <Toggle disabled dark />
            <Toggle background={false} />
            <div style={{ marginTop: "20px" }} />
            <Toggle background={false} value={false} />
            <div style={{ marginTop: "20px" }} />
          </div>
        }
        name="Toggle"
      />
    </Container>
  );
};

export default AtomsPage;
