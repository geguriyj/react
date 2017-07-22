import React from 'react';

class List extends React.Component {
    constructor() {
        super();
    }

    render() {
        const imgList = this._getImageList();

        return (
          <div>
              {imgList}
          </div>
        );
    }

    _getImageList() {
        const list = this.props.list;

        return list.map((val)=>{
            return <img key={ val.id } width="100" height="100" src={ val.url } />;
        });
    }
}

export default List;