import React from 'react';
import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contacts-action';
import * as contactSelectors from '../../redux/contacts/contacts-selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(contactSelectors.getFilter);
  const onChange = e => dispatch(actions.changeFilter(e.target.value));

  return (
    <div>
      <label>
        <b>Find contacts by name:</b>
        <input
          className={style.input}
          type="text"
          name="filter"
          placeholder="Rosie Simpson"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

// const mapStateToProps = state => ({
//   value: contactSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: e => dispatch(actions.changeFilter(e.target.value)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
