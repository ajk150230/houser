import { createStore } from 'redux'

const initialState = {
    name: '',
    address: '',
    state: '',
    zipcode: 0,
    imgURL: '',
    mortgage: 0,
    rent: 0,
    post: []
}

export const UPDATE_NAME = "UPDATE_NAME"
export const UPDATE_ADDRESS = "UPDATE_ADDRESS"
export const UPDATE_STATE = "UPDATE_STATE"
export const UPDATE_IMG = "UPDATE_IMG"
export const UPDATE_ZIP = "UPDATE_ZIP"
export const UPDATE_MORT = "UPDATE_MORT"
export const UPDATE_RENT = "UPDATE_RENT"
export const update_listing = "update_listing"

function reducer(state = initialState, action) {
    const { type, payload } = action
    switch (type) {
        case UPDATE_NAME:
            return { ...state, name: payload }
        case UPDATE_ADDRESS:
            return { ...state, address: payload }
        case UPDATE_STATE:
            return { ...state, state: payload }
        case UPDATE_IMG:
            return { ...state, imgURL: payload }
        case UPDATE_ZIP:
            return { ...state, zipcode: payload }
        case UPDATE_MORT:
            return { ...state, mortgage: payload }
        case UPDATE_RENT:
            return { ...state, rent: payload }
        case update_listing:
            const { name, address, state, zipcode, imgURl, mortgage, rent } = state
            const listing = { name, address, state, zipcode, imgURl, mortgage, rent }
            const newlisting = [...state.post, listing]
            return {
                ...state, post: newlisting
            }
        default:
            return 
    }
}

export default createStore(reducer)