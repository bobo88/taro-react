import React from 'react'
import { View } from '@tarojs/components'
import {
  ConfigProvider,
  Form,
  Button,
  InputNumber,
  Input,
  Loading,
  Tabbar,
  TextArea
} from '@nutui/nutui-react-taro'
import { Cart, Category, Find, Home, User } from '@nutui/icons-react-taro'

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
        <Loading type="spinner">加载中（fe.ycy88.com）</Loading>
      </ConfigProvider>

      <Tabbar
        onSwitch={(value) => {
          console.log(value)
        }}
        className="tabbar">
        <Tabbar.Item title="首页" icon={<Home size={18} />} value={9} />
        <Tabbar.Item title="分类" icon={<Category size={18} />} />
        <Tabbar.Item title="发现" icon={<Find size={18} />} />
        <Tabbar.Item title="购物车" icon={<Cart size={18} />} />
        <Tabbar.Item title="我的" icon={<User size={18} />} />
      </Tabbar>
    </View>
  )
}

export default Index
