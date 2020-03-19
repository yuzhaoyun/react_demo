// 这是项目的根组件
import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

// 导入模块化的样式
import styles from './css/app.scss'

// 按需导入 Ant Design
import { Layout, Menu, Sider } from 'antd'
const { Header, Content, Footer } = Layout

// 导入路由相关的组件页面
import AboutCon from './components/about/aboutContainer'
import HomeCon from './components/home/homeContainer'
import MovieCon from './components/movie/movieContainer'


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    // componentWillMount() {
    //     console.log(window)
    // }

    render() {
        return <HashRouter>
            <Layout className="layout" style={{height: '100%'}}>
                {/* Header 头部区域 */}
                <Header>
                    <div className={styles.logo} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[window.location.hash.split('/')[1]]} style={{ lineHeight: '64px' }}>
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
                {/* Content 中间的内容区域 */}
                <Content style={{ backgroundColor: '#fff',flex: 1}}>
                    <Route path="/home" component={HomeCon}></Route>
                    <Route path="/movie" component={MovieCon}></Route>
                    <Route path="/about" component={AboutCon}></Route>
                </Content>
                {/* Footer 底部区域 */}
                <Footer style={{ textAlign: 'center' }}>React 测试项目 2020</Footer>
            </Layout>
        </HashRouter>
    }
}