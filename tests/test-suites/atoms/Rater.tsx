import React from "react";
import { mount } from "enzyme";
import { Rater } from "../../../src";

const raterTest = () => {
  describe("Rater", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Rater />);
      expect(wrapper);
      wrapper = mount(
        <Rater
          type="circle"
          vertical
          additionalProps={{ "data-mbx-test-class": "test" }}
          value={2}
        />
      );
      expect(wrapper);
    });

    test("Clicking on any rate icon trigger the onChange callback", () => {
      const onChangeStub = jest.fn();
      let wrapper = mount(<Rater max={7} value={3} onChange={onChangeStub} />);
      wrapper.find('[data-mbx-test="vote_1"]').simulate("mouseenter");
      wrapper.find('[data-mbx-test="vote_1"]').simulate("mouseleave");
      wrapper.find('[data-mbx-test="vote_5"]').simulate("mouseenter");
      wrapper.find('[data-mbx-test="vote_5"]').simulate("mouseleave");
      wrapper.find('[data-mbx-test="vote_1"]').simulate("click");
      wrapper.setProps({ max: 10 });
      wrapper.setProps({ value: 4 });
      expect(onChangeStub).toBeCalledWith(2);
    });
  });
};

export default raterTest;
