import {
  ADD_PROPERTY_DETAILS,
  ADD_ASSESSEE,
  ADD_LIEN,
  ADD_IMPORTANT_DATES,
  CHANGE_FORM_TYPE,
  CHANGE_GRID,
  FORM_ADD,
  FORM_VIEW,
  FORM_EDIT,
  SELECTED_DATA,
  GET_PROPERTY_DATA,
  GET_LIEN_DATA,
  GET_ASSESSEE_DATA,
  SINGLE_RECORD,
  LOADER_STATE,
  VIEW_SELECTED_DATA,
  PROPERTY_GRID,
  LIEN_GRID,
  ASSESSEE_GRID
} from "Constants/actionTypes";

export const LoaderState = () => {
  return {
    type: LOADER_STATE
  };
};

/********** ADD NEW ACTIONS **********/
export const GetPropertyData = data => {
  return {
    type: GET_PROPERTY_DATA,
    payload: data
  };
};

export const GetLienData = data => {
  return {
    type: GET_LIEN_DATA,
    payload: data
  };
};

export const GetAssesseeData = data => {
  return {
    type: GET_ASSESSEE_DATA,
    payload: data
  };
};

/********** ADD NEW ACTIONS **********/
export const AddNewPropertyDetails = data => {
  return {
    type: ADD_PROPERTY_DETAILS,
    payload: data.data
  };
};

export const AddNewAssessee = () => {
  return {
    type: ADD_ASSESSEE
  };
};

export const AddNewLien = () => {
  return {
    type: ADD_LIEN
  };
};

export const AddNewImportantDates = () => {
  return {
    type: ADD_IMPORTANT_DATES
  };
};

/********** FORM ACTIONS **********/
export const ChangeFormType = payload => {
  let fieldDisable = payload == FORM_VIEW ? true : false;
  let data = {
    formType: payload,
    fieldDisable
  };
  return {
    type: CHANGE_FORM_TYPE,
    payload: data
  };
};

export const ChangeGrid = payload => {
  return {
    type: CHANGE_GRID,
    payload: payload
  };
};

export const SelectedData = payload => {
  return {
    type: SELECTED_DATA,
    payload: payload
  };
};

export const SingleRecordData = payload => {
  return {
    type: SINGLE_RECORD,
    payload: payload
  };
};
