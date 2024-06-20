import React from "react";
import { mount } from "enzyme";
import { Review } from "../../../src";

const reviewTest = () => {
  describe("Review", () => {
    test("Rendering test", () => {
      let wrapper = mount(<Review />);
      expect(wrapper);
      wrapper = mount(
        <Review
          logo="github"
          rate={3}
          url="www.example.com"
          user="Test user"
          description="Test review description"
          icon={<div key="test_review_icon">icon</div>}
        />
      );
      expect(wrapper);
      wrapper = mount(<Review logo="github" />);
      expect(wrapper);
    });
    test("UI test", () => {
      let wrapper = mount(<Review />);
      expect(wrapper);
      wrapper = mount(
        <Review
          // @ts-ignore
          logo="invalid-logo"
          url="www.example.com"
        />
      );
      expect(wrapper.find('svg[data-mbx-id="default-logo"]')).toHaveLength(1);
      wrapper = mount(
        <Review
          // @ts-ignore
          logo="invalid-logo"
        />
      );
      expect(wrapper.find('svg[data-mbx-id="default-logo"]')).toHaveLength(1);
    });
  });
};

export default reviewTest;
