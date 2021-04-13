import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";

const spy = jest.spyOn(About.methods, "getPosts");

jest.mock("axios", () => ({
  get: () =>
    Promise.resolve({
      data: [
        {
          userId: 1,
          id: 1,
          title:
            "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
      ]
    })
}));

describe("About.vue", () => {
  it("should get trigger getPosts method", () => {
    // Using spy to check if method is triggered
    shallowMount(About);
    expect(spy).toHaveBeenCalled();
  });

  it("should set posts with getPosts method", async () => {
    // Using jest.mock to mock api response for axios request
    const wrapper = shallowMount(About);
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.posts.length).toBe(1);
  });

  it("should set alerts", async () => {
    // Set posts like previous test
    // Call out buttonClick and check if there is alert(s)
    const wrapper = shallowMount(About, {});
    await wrapper.vm.$nextTick();

    wrapper.vm.buttonClick(1);
    expect(wrapper.vm.alerts.length).toBe(1);

    wrapper.vm.buttonClick(1);
    expect(wrapper.vm.alerts.length).toBe(2);
  });

  it("should removeExcessAlerts", async () => {
    // Set posts like previous test
    // Call out buttonClick more than five times
    const wrapper = shallowMount(About, {});
    await wrapper.vm.$nextTick();

    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);

    expect(wrapper.vm.alerts.length).toBe(5);
  });

  it("should removeAlert", async () => {
    // Set posts like previous test
    // Call out buttonClick couple times
    // Check if there are as many alerts as you clicked
    // Call out removeAlert
    // Check if alerts length is as it should be
    const wrapper = shallowMount(About, {});
    await wrapper.vm.$nextTick();

    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);
    wrapper.vm.buttonClick(1);

    expect(wrapper.vm.alerts.length).toBe(3);

    wrapper.vm.removeAlert(1);

    expect(wrapper.vm.alerts.length).toBe(2);
  });
});
