import React from 'react'
import { View } from '@tarojs/components'
import {
  ConfigProvider,
  Form,
  Button,
  InputNumber,
  Input,
  Loading,
  TextArea
} from '@nutui/nutui-react-taro'
import './index.scss'

function Index() {
  return (
    <View className="nutui-react-demo">
      <View className="index">欢迎使用 NutUI React 开发 Taro 多端项目。</View>
      <View className="index">
        <Button type="primary" className="btn">
          NutUI React Button
        </Button>
      </View>

      <Form
        labelPosition="right"
        footer={
          <>
            <Button formType="submit" block type="primary">
              提交
            </Button>
          </>
        }>
        <Form.Item
          required
          label="字段A"
          name="username"
          rules={[
            { max: 5, message: '字段A不能超过5个字' },
            { required: true, message: '请输入字段A' }
          ]}>
          <Input
            className="nut-input-text"
            placeholder="请输入字段A"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="字段D"
          name="address"
          rules={[
            { max: 15, message: '字段D不能超过15个字' },
            { required: true, message: '请输入字段D' }
          ]}>
          <Input
            className="nut-input-text"
            placeholder="请输入字段D"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="数量"
          name="num"
          getValueFromEvent={(...args) => args[0]}>
          <InputNumber />
        </Form.Item>
      </Form>

      <ConfigProvider
        theme={{
          nutuiLoadingIconSize: '40px',
          nutuiLoadingIconColor: '#fa2c19'
        }}>
        <Loading type="spinner">加载中</Loading>
      </ConfigProvider>
    </View>
  )
}

export default Index
