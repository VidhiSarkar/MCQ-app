import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/'

class McqQuestions extends Component {

    componentDidMount(){
        const { initWatchQuestions } = this.props;
        initWatchQuestions();
    }

    render(){
        return(
            <div>Hello Web</div>
        );
    }
}

const mapStateToProps = state => {

    return {
        questions: state.mcq.questions,
        error: state.mcq.error
    };
};

const mapDispatchToProps = dispatch => {

    return {
        initWatchQuestions: () => dispatch(actions.initWatchQuestions())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)( McqQuestions );