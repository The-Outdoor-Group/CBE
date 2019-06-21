import React from 'react';
import { connect } from 'react-redux';
import loadable from '@loadable/component';
import { setMoreInfoPanelVisibility, setIdMatchForParentContainer } from './../../actions/shared-ui-actions';
import assembleComponent from './more-info-components/assembleComponents';

const MoreInfoArticle = loadable( () => import('./more-info-components/container/MoreInfoArticle') );

// will be a result of calling a second doc in the db based on moreInfoHandle
/* below is the floating close button <p>Animate and return data from a query; pass {handle}  */
const moreInfoNodes = [
  {
    type: 'moreInfoHorizontalTopArticleBottomMedia',
    content: {
      headerArticles: [
        {
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          h3: "Header Article 2",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          h3: "Header Article 3",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ],
      image: {
        src: "https://via.placeholder.com/150",
        alt: "This is a placeholder"
      }
    }
  },
  {
    type: 'moreInfoHorizontalTopArticleBottomMedia',
    content: {
      headerArticles: [
        {
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ],
      image: {
        src: "https://via.placeholder.com/150",
        alt: "This is a placeholder"
      }
    }
  },
  {
    type: 'moreInfoHorizontalTopArticleBottomMedia',
    content: {
      headerArticles: [
        {
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ],
      image: {
        src: "https://via.placeholder.com/150",
        alt: "This is a placeholder"
      },
      footerArticles: [
        {
          h3: "Footer Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          h3: "Footer Article 2",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          h3: "Footer Article 3",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          h3: "Footer Article 4",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    }
  },
  {
    type: 'moreInfoHorizontalLeftMediaRightArticle',
    content: {
      headerArticles: [
        {
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ],
      video: {
        src: "https://via.placeholder.com/150",
        alt: "This is a placeholder"
      }
    }
  },
  {
    type: 'moreInfoHorizontalImageSlider',
    content: {
      headerArticles: [
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 2",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 3",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 4",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 5",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ]
    }
  },
  {
    type: "moreInfoHorizontalAlternateMediaText",
    content: {
      headerArticles: [
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 1",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 2",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          image: {
            src: "https://via.placeholder.com/150",
            alt: "This is a placeholder"
          },
          h3: "Header Article 3",
          p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ]
    }
  },
]


import './assets/css/moreInfoPanel/more-info-component.css';

const MoreInfoComponent = (props) => {

    const createMoreInfoNodes = () => moreInfoNodes.map( (props, i) => <MoreInfoArticle key={i} data={props} /> );

    const { handle, showInfo } = props;
    const showHide = (showInfo) => showInfo ? "" : "hidden";

    const closePanel = () => {
      props.setIdMatchForParentContainer(null);
      props.setMoreInfoPanelVisibility(false);
    }
    return (
      <section className={`more-info-panel ${showHide(showInfo)}`}>
        {showInfo ? createMoreInfoNodes() : null }
        <span className="more-info-close" onClick={ () => closePanel() }>X CLOSE</span>
      </section>
    );
}

const mapStateToProps = ({ sharedUiState }) => ({ sharedUiState });
export default connect(mapStateToProps, { setMoreInfoPanelVisibility, setIdMatchForParentContainer })(MoreInfoComponent);
