import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { Row, Col,Space ,Button} from 'antd';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender, isImg } from './utils';
import { Card } from 'antd';
const { Meta } = Card;
import teamCss from './team.module.css';

class Teams1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayState:false,
      displayState2:false,
      displayState3:false
    }

  }

  getBlockChildren = (data) =>
    data.map((item, i) => {
      const { titleWrapper, ...$item } = item;
      return (
        <Col key={i.toString()} {...$item}>
          {titleWrapper.children.map(getChildrenToRender)}
        </Col>
      );
    });

  render() {
    const { ...props } = this.props;
    const { dataSource } = props;
    delete props.dataSource;
    delete props.isMobile;
    //团队信息列表，就是那一堆图片
    const listChildren = this.getBlockChildren(dataSource.block.children);

    let {displayState,displayState2, displayState3} = this.state;

    let display_state_1 = displayState === true ? 'block':'none'
    let display_state_2 = displayState2 === true ? 'block':'none'
    let display_state_3 = displayState3 === true ? 'block':'none'
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {/*文章标题*/}
          <div {...dataSource.titleWrapper}>
            {dataSource.titleWrapper.children.map(getChildrenToRender)}
          </div>
          <Row justify="space-around" align="middle">
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                onMouseLeave={() => {
                  console.log(this.state.displayState);
                  this.setState({displayState:!this.state.displayState})
                }}
                onMouseEnter={() => {

                  console.log(this.state.displayState);
                  this.setState({displayState:!this.state.displayState})
                }}
                cover={
                  <div className={teamCss.team_photo}>
                    <div className={teamCss.cover_page} style={{display:display_state_1}}>
                      <div className={teamCss.cover_page_box}>
                        <h1 className={teamCss.text_title}>嘉虹</h1>
                        <h1 className={teamCss.text_title}>上海虹桥机场店</h1>
                        <Button style={{marginTop:"240px"}}>预定</Button>
                      </div>

                    </div>
                    <img style={{width:240,height:300.19}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                  </div>

                }
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>

            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                onMouseLeave={() => {
                  console.log(this.state.displayState);
                  this.setState({displayState2:!this.state.displayState2})
                }}
                onMouseEnter={() => {

                  console.log(this.state.displayState);
                  this.setState({displayState2:!this.state.displayState2})
                }}
                cover={ <div className={teamCss.team_photo}>
                  <div className={teamCss.cover_page} style={{display:display_state_2}}>
                    <div className={teamCss.cover_page_box}>
                      <h1 className={teamCss.text_title}>嘉虹</h1>
                      <h1 className={teamCss.text_title}>上海虹桥机场店</h1>
                      <Button style={{marginTop:"240px"}}>预定</Button>
                    </div>

                  </div>
                  <img style={{width:240,height:300.19}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                onMouseLeave={() => {
                  console.log(this.state.displayState);
                  this.setState({displayState3:!this.state.displayState3})
                }}
                onMouseEnter={() => {

                  console.log(this.state.displayState);
                  this.setState({displayState3:!this.state.displayState3})
                }}
                cover={ <div className={teamCss.team_photo}>
                  <div className={teamCss.cover_page} style={{display:display_state_3}}>
                    <div className={teamCss.cover_page_box}>
                      <h1 className={teamCss.text_title}>嘉虹</h1>
                      <h1 className={teamCss.text_title}>上海虹桥机场店</h1>
                      <Button style={{marginTop:"240px"}}>预定</Button>
                    </div>

                  </div>
                  <img style={{width:240,height:300.19}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                </div>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com" />
              </Card>
            </Col>

          </Row>

          {/*<OverPack {...dataSource.OverPack}>*/}

          {/*  <QueueAnim*/}
          {/*    type="bottom"*/}
          {/*    key="block"*/}
          {/*    leaveReverse*/}
          {/*    {...dataSource.block}*/}
          {/*    component={Row}*/}
          {/*  >*/}
          {/*    {listChildren}*/}
          {/*  </QueueAnim>*/}
          {/*</OverPack>*/}
        </div>
      </div>
    );
  }
}

export default Teams1;
