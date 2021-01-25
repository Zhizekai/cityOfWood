import React, {Component} from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button, Space,
  // AutoComplete,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import {FormInstance} from "antd/lib/form";
import {AlipayCircleOutlined, QqOutlined, WechatOutlined, WeiboOutlined} from "@ant-design/icons/lib";


const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    xs: {span: 24},
    sm: {span: 8},
  },
  wrapperCol: {
    xs: {span: 24},
    sm: {span: 16},
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const {Option} = Select;
const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{width: 70}}>
      <Option value="86">+86</Option>
      <Option value="87">+87</Option>
    </Select>
  </Form.Item>
);

class UserRegister extends Component {

  constructor(props: any) {
    super(props);

    this.state = {
      autoCompleteResult: []
    };
  }

  formRef = React.createRef<FormInstance>();

  // onWebsiteChange = (value: string) => {
  //   if (!value) {
  //     this.setState({autoCompleteResult:[]});
  //   } else {
  //     this.setState({autoCompleteResult:['.com', '.org', '.net'].map(domain => `${value}${domain}`)})
  //     setAutoCompleteResult();
  //   }
  // };


  render() {
    // websiteOptions = this.state.autoCompleteResult.map(website => ({
    //   label: website,
    //   value: website,
    // }));

    return (
      <Row>
        <Col flex={3}>
          <div style={{width:'500px',margin:'50px auto'}}>
            <Form
              {...formItemLayout}
              ref={this.formRef}
              name="register"
              onFinish={onFinish}
              initialValues={{
                residence: ['zhejiang', 'hangzhou', 'xihu'],
                prefix: '86',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password/>
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({getFieldValue}) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject('The two passwords that you entered do not match!');
                    },
                  }),
                ]}
              >
                <Input.Password/>
              </Form.Item>

              <Form.Item
                name="nickname"
                label={
                  <span>
            Nickname&nbsp;
                    <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined/>
            </Tooltip>
          </span>
                }
                rules={[{required: true, message: 'Please input your nickname!', whitespace: true}]}
              >
                <Input/>
              </Form.Item>

              <Form.Item
                name="residence"
                label="Habitual Residence"
                rules={[
                  {type: 'array', required: true, message: 'Please select your habitual residence!'},
                ]}
              >
                <Cascader options={residences}/>
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{required: true, message: 'Please input your phone number!'}]}
              >
                <Input addonBefore={prefixSelector} style={{width: '100%'}}/>
              </Form.Item>

              {/*<Form.Item*/}
              {/*  name="website"*/}
              {/*  label="Website"*/}
              {/*  rules={[{ required: true, message: 'Please input website!' }]}*/}
              {/*>*/}
              {/*  <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="website">*/}
              {/*    <Input />*/}
              {/*  </AutoComplete>*/}
              {/*</Form.Item>*/}

              <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                <Row gutter={8}>
                  <Col span={12}>
                    <Form.Item
                      name="captcha"
                      noStyle
                      rules={[{required: true, message: 'Please input the captcha you got!'}]}
                    >
                      <Input/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Button>Get captcha</Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item
                name="agreement"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col flex={2} >
          <div  style={{borderLeft: '1px solid #b0b0b0',width:'100%',height:'400px'}}>
            <div style={{width:'300px',margin:'30px auto'}}>
              用其他账号登录
              <div style={{margin:'40px auto'}}>
                <Space size={'large'}>
                  <Button shape="circle" type="primary" icon={ <QqOutlined />}/>
                  <Button shape="circle" type="primary" icon={  <WechatOutlined />}/>
                  <Button shape="circle" type="primary" icon={ <AlipayCircleOutlined />}/>
                  <Button shape="circle" type="primary" icon={   <WeiboOutlined />}/>
                </Space>

              </div>
              <div>已是会员</div>
              <Button  type="primary" >直接登录</Button>
            </div>
          </div>

        </Col>
      </Row>
    );
  }
}

export default UserRegister;
