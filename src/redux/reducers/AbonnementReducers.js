import {
  ABONNEMENT_CREATE_FAIL,
  ABONNEMENT_CREATE_REQUEST,
  ABONNEMENT_CREATE_RESET,
  ABONNEMENT_CREATE_SUCCESS,
  ABONNEMENT_LIST_FAIL,
  ABONNEMENT_LIST_REQUEST,
  ABONNEMENT_LIST_SUCCESS,
} from "../constant/AbonnementConstant";

export const AbonnementListReducer = (state = { abonnements: [] }, action) => {
  switch (action.type) {
    case ABONNEMENT_LIST_REQUEST:
      return { loading: true, abonnements: [] };
    case ABONNEMENT_LIST_SUCCESS:
      return {
        loading: false,
        abonnements: action.payload,
      };
    case ABONNEMENT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const AbonnementCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ABONNEMENT_CREATE_REQUEST:
      return { loading: true };
    case ABONNEMENT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case ABONNEMENT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ABONNEMENT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};
/*
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ABONNEMENT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ABONNEMENT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case ABONNEMENT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
*/
/*
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };
    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };
    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};
*/
