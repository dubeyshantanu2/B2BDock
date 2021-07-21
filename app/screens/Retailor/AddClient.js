import React from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../../component/forms";

const validationSchema = Yup.object().shape({
    name: Yup.string('Enter your name').required('Name is required').label("Name"),
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required').label("Email"),
    phone: Yup.number('Enter your Phone number').required('Phone number is required').label("Phone number"),
    address: Yup.string('Enter your address').required('Address is required').label("Address"),
});

const AddClient = ({ navigation }) => {
    return (
        <>
            <View style={{ margin: "4%" }}>
                <AppForm initialValues={{
                    name: "",
                    email: "",
                    address: "",
                    phone: "",
                }}

                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >

                    <AppFormField name="name" placeholder={"Enter the name"} placeholderTextColor={"#ccc"} autoCompleteType={"email"} autoCapitalize={"none"} />
                    <AppFormField name="email" placeholder={"Enter the email"} keyboardType="email-address" placeholderTextColor={"#ccc"} autoCompleteType={"email"} autoCapitalize={"none"} />
                    <AppFormField keyboardType="numeric" name="phone" placeholder={"Enter the Phone Number"} placeholderTextColor={"#ccc"} />
                    <AppFormField maxLength={255} multiline name="address" placeholder={"Enter the Address"} numberOfLines={3} placeholderTextColor={"#ccc"} autoCompleteType={"street-address"} />
                    <View style={{ marginTop: 220 }}>
                        <SubmitButton title="Save" />
                    </View>
                </AppForm>
            </View>
        </>
    )
}

export default AddClient;