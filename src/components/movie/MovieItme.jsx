import React from 'react'

// 导入样式
import itemStyle from '../../css/movie_item.scss'
import {Rate} from 'antd'

export default class MovieItem extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render () {
        return <div className={itemStyle.box}  onClick={this.goDetail}>
            <img src={this.props.images.small} className={itemStyle.img} alt=""/>
            <h4 className={itemStyle.title}>电影名称: {this.props.title}</h4>
            <h4 className={itemStyle.title}>上映年份: {this.props.year} 年</h4>
            <h4 className={itemStyle.title}>电影类型: {this.props.genres.join(',')}</h4>
            <Rate disabled defaultValue={this.props.rating.average/2}></Rate>
        </div>
    }

    goDetail = () => {
        this.props.history.push(`/movie/detail/${this.props.id}`)
    }
}