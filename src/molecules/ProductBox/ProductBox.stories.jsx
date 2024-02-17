import ProductBox from './ProductBox';

/**@type{import('@storybook/react').Meta} */
export default {
  component: ProductBox,
  argTypes: {
    is샛별배송: { control: 'boolean' },
  }
};

/**@type{import('@storybook/react').StoryObj} */
export const 기본표시 = {
  args: {
    isKarlyOnly: true,
    is한정수량: true,
    is샛별배송: true,
    할인률: 0,
    price: 0,
  }
};