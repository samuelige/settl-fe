import React, { useContext } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";

import Portal from "@/_shared/HOC/Portal";
import AppContext from "@/_lib/contextApi";

import { airtimeValidationSchema} from "./validation";
import { useFormik } from "formik";
import { MuiTelInput } from 'mui-tel-input';
import FormError from "@/_shared/components/FormError";
import CustomModal from "@/_shared/components/CustomModal";
import { useAppDispatch, useAppSelector } from "@/store";
import { updateUserDiscount, updateUserNumberOfTransaction } from "@/store/slices/userSlice";
import { setTransactionHistory } from "@/store/slices/transactionHistorySlice";
import { calculateYearsSince } from "@/_shared/utils/calculateYearsSince";


const Airtime = () => {
    const dispatch = useAppDispatch();
    const { toggleAirtime, setToggleAirtime} =
        useContext(AppContext);
    const userInfo = useAppSelector(
        (state) => state.user.user_info);

    const onSubmit = async (values: any) => {
        
        const getUser = userInfo.find((item) => item.acct_number === values.source_acct);
        const yearSince = getUser?.createAt ?  new Date(getUser.createAt) : new Date();

        const payload = {
            ...values,
            name: getUser?.name,
            transaction_type: "airtime",
        }

        dispatch(setTransactionHistory({transaction_info: payload}))
        dispatch(updateUserNumberOfTransaction({id: String(getUser?.id), value: getUser?.number_of_transactions ? Number(getUser.number_of_transactions + 1) : 1}))

        // 3. If a user has been a customer for over 4 years, he gets a 10% 
        if(calculateYearsSince(yearSince) > 4){
            dispatch(updateUserDiscount({id: String(getUser?.id), value: Number("0.10")}))
        }
        handleCancel();
    };

    const formik = useFormik({
        initialValues:{
            source_acct: "",
            network_provider: "",
            amount: "",
            phone_number: "",
        },
        validationSchema:airtimeValidationSchema,
        onSubmit: onSubmit,
        
    })
    const {
        values,
        errors,
        setFieldValue,
        handleBlur,
        handleSubmit,
        touched,
        isSubmitting,
        isValid
    } = formik;

    const handleCancel = () => {
        setToggleAirtime(false);
    };


  return (
    <Portal>
      <CustomModal
        open={toggleAirtime}
        setClose={() => null}
        overFlowShouldNotCloseModal
      >
        <div className="w-[21rem] sm:w-[25rem]">
            <div className="p-4  sm:px-6">
                <h1 className="mb-1  text-lg font-semibold text-gray-900">
                    Buy Airtime
                </h1>
                <p className="text-sm ">
                    Please select fill the following fields below.
                </p>
            </div>

            <>
                <form className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6 w-full space-y-5 h-auto  overflow-y-auto [&::-webkit-scrollbar]:appearance-none" onSubmit={handleSubmit}>
                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            Source account
                        </label>
                        <Select
                            fullWidth
                            value={values?.source_acct}
                            name={"source_acct"}
                            onChange={(e) => setFieldValue("source_acct", e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            MenuProps={{
                            style: { zIndex: 35001 },
                            }}
                        >
                            <MenuItem value="">
                                <p className="text-base text-black-200">Select source acct</p>
                            </MenuItem>

                            {
                                userInfo && userInfo.map((item) => (
                                    <MenuItem key={item.id} value={item?.acct_number}>{item?.name} - {item?.acct_number}</MenuItem>
                                ))
                            }

                        </Select>
                        {touched.source_acct && errors.source_acct && <FormError message={errors.source_acct} />}
                    </div>
                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            Network provider
                        </label>
                        <Select
                            fullWidth
                            value={values?.network_provider}
                            name={"network_provider"}
                            onChange={(e) => setFieldValue("network_provider", e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            MenuProps={{
                            style: { zIndex: 35001 },
                            }}
                        >
                            <MenuItem value="">
                                <p className="text-base text-black-200">Select network provide</p>
                            </MenuItem>

                            {
                                ["MTN", "Glo", "Airtel"].map((item, index) => (
                                    <MenuItem key={index} value={item}>{item}</MenuItem>
                                ))
                            }

                        </Select>
                        {touched.network_provider && errors.network_provider && <FormError message={errors.network_provider} />}
                    </div>

                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            Destination
                        </label>
                        <MuiTelInput
                            fullWidth
                            defaultCountry="NG"
                            onChange={(value: any) => setFieldValue("phone_number", value)}
                            onBlur={handleBlur}
                            value={values?.phone_number}
                            className='mt-2'
                            name={"phone_number"}
                        />
                        {touched.phone_number && errors.phone_number && (
                            <FormError message={errors.phone_number} />
                        )}
                    </div>

                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            Amount
                        </label>
                        <TextField
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue("amount", e.target.value)}
                            fullWidth
                            type={"number"}
                            placeholder="Enter amount"
                            name={'amount'}
                        />
                        {touched.amount && errors.amount && <FormError message={errors.amount} />}
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <Button
                        component="label"
                        fullWidth
                        variant="outlined"
                        onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            onClick={() => null}
                        >
                            Confirm
                        </Button>
                    </div>
                </form>
            </>
        </div>
      </CustomModal>
    </Portal>
  );
};

export default Airtime;

