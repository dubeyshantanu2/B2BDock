import React from 'react';
import { View, ScrollView } from 'react-native';
import * as Yup from "yup";

import { AppForm, AppFormField, AppFormPicker, SubmitButton } from "../../component/forms";

const validationSchema = Yup.object().shape({
    email: Yup.string('Enter your email').email('Enter a valid email').required('Email is required').label("Email"),
    primaryaddress: Yup.string('Enter your primary address').required('Primary address is required').label("Primary address"),
    secondaryaddress: Yup.string('Enter your secondary address').required('Secondary address is required').label("Secondary address"),
    gst: Yup.string('Enter your GST').required('GST is required').min(15).max(15).label("GST"),
    pan: Yup.string('Enter your PAN').required('PAN is required').min(11).max(11).label("PAN"),
    phone: Yup.number('Enter your Phone number').required('Phone number is required').label("Phone number"),
    category: Yup.object().required('Select a store').nullable().label("Store"),
});

const categories = [
    { label: "Swasthika Traders", value: 1 },
    { label: "Hari Traders", value: 2 },
    { label: "Qwerty Traders", value: 3 },
];

const EditProfile = ({ navigation }) => {
    return (
        <>
            <ScrollView>

                <View style={{ margin: "4%", }}>

                    <AppForm
                        initialValues={{
                            email: "",
                            primaryaddress: "",
                            secondaryaddress: "",
                            gst: "",
                            pan: "",
                            phone: "",
                            category: null,
                        }}

                        onSubmit={(values) => console.log(values)}
                        validationSchema={validationSchema}
                    >

                        <AppFormPicker items={categories} name="category" placeholder="Select Store" />
                        <AppFormField name="email" placeholder={"Email"} keyboardType="email-address" placeholderTextColor={"#ccc"} autoCompleteType={"email"} autoCapitalize={"none"} />
                        <AppFormField maxLength={255} multiline name="primaryaddress" placeholder={"Enter your Primary Address"} numberOfLines={3} placeholderTextColor={"#ccc"} autoCompleteType={"street-address"} />
                        <AppFormField maxLength={255} multiline name="secondaryaddress" placeholder={"Enter your Secondary Address"} numberOfLines={3} placeholderTextColor={"#ccc"} autoCompleteType={"street-address"} />
                        <AppFormField keyboardType="default" autoCapitalize={"characters"} name="gst" placeholder={"Enter your GST"} placeholderTextColor={"#ccc"} />
                        <AppFormField keyboardType="default" autoCapitalize={"characters"} name="pan" placeholder={"Enter your PAN"} placeholderTextColor={"#ccc"} />
                        <AppFormField keyboardType="numeric" name="phone" placeholder={"Enter your Phone Number"} placeholderTextColor={"#ccc"} />

                        <View style={{ marginTop: 220 }}>
                            <SubmitButton title="Save Changes" />
                        </View>
                    </AppForm>

                </View>
            </ScrollView>
        </>
    )
}

export default EditProfile;