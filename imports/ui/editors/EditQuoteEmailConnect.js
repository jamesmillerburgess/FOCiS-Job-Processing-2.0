import { connect } from 'react-redux';

import EditQuoteEmail from './EditQuoteEmail.jsx';
import * as actionCreators from '../../state/actions/emailActions';
import { loadQuote } from '../../state/actions/quoteActions';

const mapStateToProps = state => ({ quote: state.quote });

const mapDispatchToProps = dispatch => ({
  dispatchers: {
    onLoad: quote => dispatch(loadQuote(quote)),
    setEmailTo: (id, name) => dispatch(actionCreators.setEmailTo(id, name)),
    setEmailCC: (id, rate) => dispatch(actionCreators.setEmailCC(id, rate)),
    setEmailSubject: (id, units) => dispatch(actionCreators.setEmailSubject(id, units)),
    setEmailMessage: (id, unitPrice) => dispatch(actionCreators.setEmailMessage(id, unitPrice)),
  },
});

const EditQuoteEmailConnect = connect(mapStateToProps, mapDispatchToProps)(EditQuoteEmail);

export default EditQuoteEmailConnect;
