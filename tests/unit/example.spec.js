import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("should add properly", () => {
    const wrapper = shallowMount(HelloWorld, {});
    const total = wrapper.vm.add(20, 5);
    expect(total).toBe(25);
  });
});
