import React from 'react'

// 导入ui 组件
import {Button, Icon, Spin, Alert } from 'antd'
import fetchJSONP from 'fetch-jsonp'

export default class MovieDetail extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            info: {}, // 电影信息对象
            isloading: true
        };
    }

    componentWillMount () {
        let url = `https://api.douban.com/v2/movie/subject/${this.props.match.params.id}?apikey=0df993c66c0c636e29ecbb5344252a4a`;
        fetchJSONP(url).then(response => response.json()).then(data => {
            this.setState({
                info: data,
                isloading: false
            })
        })
    }

    render () {
        return  <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />返回电影列表页面
            </Button>
            {this.renderInfo()}
        </div>
    }
    
    //
    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">  
                <Alert message="正在请求电影列表" description="精彩内容, 马上呈现." type="info"/>
            </Spin>
        } else {
            return <div>
                <div style={{textAlign: 'center'}}>
                    <h1>{this.state.info.title}</h1>
                    <img src={this.state.info.images.large} alt="" style={{width:'260px',marginBottom:'10px'}}/>
                </div>
                <p style={{textIndent: '2em', lineHeight: '20px', }}>{this.state.info.summary}</p>
            </div>
        }
    }
    // 实现返回按钮的功能
    goBack = () => {
        this.props.history.go(-1);
    } 
}