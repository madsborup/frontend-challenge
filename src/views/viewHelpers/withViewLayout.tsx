import React from 'react';
import { View, Content } from '../../components/layout';

const withLayout = (Component: React.ComponentType<any>) => (props: any) => {

  //TODO: add helmet
  return (
    <View>
      <Content>
        <Component {...props} />
      </Content>
    </View>
  );
};
export default withLayout;
