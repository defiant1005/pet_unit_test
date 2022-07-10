import { mount } from '@vue/test-utils';
import Message from "@/components/Message.vue";

describe('Message.vue', () => {
    it('renders props message when passed', () => {
        const wrapper = mount(Message, {
             props: {
                 msg: 'Hello Friend'
             }
        });
        expect(wrapper.text()).toContain('Hello Friend')
    })
})