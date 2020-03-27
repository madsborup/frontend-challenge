import React from 'react';
import { View, Content } from '../../components/layout';

const withLayout = (Component: React.ComponentType<any>) => (props: any) => {
  return (
    <View>
      <Content>
        <Component {...props} />
      </Content>
    </View>
  );
};
export default withLayout;
