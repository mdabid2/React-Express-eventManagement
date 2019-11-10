import React from 'react';
import { storiesOf } from '@storybook/react';
import FormElementInput from  "../components/molecules/formEleInput";

storiesOf('Button', module)
 .add('FormElementInput', () => <FormElementInput data={{type:'text', name:'eventname',text:'Event Name',currentVal:'Event Name'}}  />);



