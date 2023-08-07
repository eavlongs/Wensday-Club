import {create} from 'zustand'

type StepOneDataType = {
    firstName: string,
    lastName: string,
    email: string
}

type StepTwoDataType = {
    day: number,
    month: number,
    year: number
}

type StepThreeDataType = {
    password: string,
    confirmPassword: string
}

type DataType = {
    stepOne: StepOneDataType,
    stepTwo: StepTwoDataType,
    stepThree: StepThreeDataType
}

type StoreType = {
    page: number,
    data: DataType,
    setStepOneData: (newStepOneData: StepOneDataType) => void,
    setStepTwoData: (newStepTwoData: StepTwoDataType) => void,
    setStepThreeData: (newStepThreeData: StepThreeDataType) => void,
    next: () => void,
    back: () => void
}

const useSignUpStore = create<StoreType>((set) => ({
    page: 1,

    data: {
        stepOne: {
            firstName: '',
            lastName: '',
            email: ''
        },
        stepTwo: {
            day: 0,
            month: 0,
            year: 0
        },
        stepThree: {
            password: "",
            confirmPassword: ""
        }
    },

    setStepOneData: (newStepOneData: StepOneDataType) => {
        set(state => ({
        data: {...state.data, stepOne: newStepOneData}
        }))
    },

    setStepTwoData: (newStepTwoData: StepTwoDataType) => {
        set(state => ({
        data: {...state.data, stepTwo: newStepTwoData}
        }))
    },

    setStepThreeData: (newStepThreeData: StepThreeDataType) => {
        set(state => ({
        data: {...state.data, stepThree: newStepThreeData}
        }))
    },

    next: () => {
        set(state => ({
            page: state.page >= 3 ? 3 : state.page + 1
        }))
    },

    back: () => {
        set(state => ({
            page: state.page <= 1 ? 1 : state.page - 1
        }))
    }
}))

export default useSignUpStore;