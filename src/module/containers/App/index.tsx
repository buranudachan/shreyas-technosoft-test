import React from 'react';
import { Card, Col } from 'antd';
import { serviceRequest } from '../../service/serviceRequest';
import { map } from 'lodash';
import MovieDetail from './movieDetailModal';

class AppComponent extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      movieDetail: [],
      isOpen: false,
      description: {}
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const options: any = {
      method: "post",
      url: 'http://www.omdbapi.com/?i=tt3896198&apikey=6fa85bce'
    };
    const res: any = await serviceRequest.request(options);
    console.log(res);
    if (res) {
      this.setState({
        movieDetail: [res.success.data]
      })
    }

  }
  /**Open Modal for show moview detail */
  openModal(movieDescriptin: any) {

    console.log('movieDescriptin', movieDescriptin);
    this.setState({
      isOpen: true,
      description: movieDescriptin
    })
  };
  /**Close Modal for show moview detail */
  closeModal() {
    this.setState({
      isOpen: false
    })
  };
  public render() {
    const movieDetails = this.state.movieDetail;
    return (
      <div className="scrollbar margin">
        <Card >
          {map(
            movieDetails,
            (data: any, index) => (

              <Col key={index} span={12} onClick={() => this.openModal(data)}>
                <div>
                  <img alt="..." src={data.Poster} className="poster" />
                  <div className="gx-flex-row">
                    <h4>Movie Name:&nbsp;</h4>
                    <h4>{data.Title}</h4>
                  </div>
                  <div className="gx-flex-row">
                    <h4>Director Name:&nbsp;</h4>
                    <h4>{data.Director}</h4>
                  </div>
                </div>

              </Col>
            )
          )}
        </Card>
        {this.state.isOpen && (<MovieDetail
          title="Movie Description"
          open={this.state.isOpen}
          width="600px"
          cancel={this.closeModal}
          movieDescription={this.state.description} />)}
      </div>
    );
  }
}
export default AppComponent
