import React, { Component, useState } from 'react';
import { View, StyleSheet, Button, Text, Alert, SafeAreaView } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';

import {
    GoogleSignin, GoogleSigninButton,
    statusCodes
} from '@react-native-google-signin/google-signin'

import t from 'tcomb-form-native';

const KILO_TO_CALO = 7716.17918;
const MIN_CALO_DAY = 1.200;
//tcomb-form
const Form = t.form.Form;
var User = t.struct({
    username: t.maybe(t.String),
    age: t.maybe(t.Number),
    height: t.Number,
    weight: t.Number,
    // gender: t.maybe(t.enums({
    //     male: 'Male',
    //     female: 'Female'
    // })),
    // plan: t.maybe(t.enums({
    //     incre: "Tăng cân",
    //     decre: "Giảm cân",
    //     keep: "Giữ dáng",
    // })),

});

var UserExample = new User({
    username: 'Dũng',
    height: 1.60,
    weight: 60,
    age: 23,
    // gender: "male",
    // plan: "keep"
});

const formStyles = {
    ...Form.stylesheet,
    formGroup: {
        normal: {
            marginBottom: 10
        },
    },
    controlLabel: {
        normal: {
            color: 'blue',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        },
        error: {
            color: 'red',
            fontSize: 18,
            marginBottom: 7,
            fontWeight: '600'
        }
    }
}

const options = {
    fields: {
        username: {
            label: 'Tên của bạn',
        },
        height: {
            label: 'Chiều cao (m)',
            error: 'Bạn cần thêm chiều cao'
        },
        weight: {
            label: 'Cân nặng (kg)',
            error: 'Bạn cần thêm cân nặng'
        },
        age: {
            label: 'Tuổi',
            error: 'Bạn cần thêm tuổi'
        },
        // gender: {
        //     label: 'Giới tính',
        //     error: 'Bạn cần chọn giới tính'
        // },
        // plan: {
        //     label: 'Kế hoạch tăng giảm cân',
        //     error: 'Bạn cần chọn kế hoạch',
        // },
    },
    stylesheet: formStyles,
};




export default function App(props) {

    const [BMI, setBMI] = useState('');
    const [calo, setCalo] = useState(0);
    const [showBMI, setShowBMI] = useState(false);
    const [showPlan, setShowPlan] = useState(false);
    const [showCalo, setShowCalo] = useState(false);

    //plan
    const [kilo, onChangeTextKilo] = useState(0);
    const [time, onChangeTextTime] = useState(0);





    //Picker
    const [gender, setGender] = useState("male");
    const [plan, setPlan] = useState("keep");


    const handleSubmit = () => {

        const valueForm = t.form.getValue();
        if (valueForm) {
            //tính BMI
            if (valueForm.height > 0 && valueForm.weight > 0) {
                var count = valueForm.weight / [valueForm.height * 2];
                if (count < 18.5) {
                    setBMI('Cân nặng thấp');
                } else if (count >= 18.5 && count < 23) {
                    setBMI('Bình thường');
                } else if (count >= 23 && count < 25) {
                    setBMI('Tiền béo phì');
                } else if (count >= 25 && count < 30) {
                    setBMI('Béo phì độ I');
                } else if (count >= 30) {
                    setBMI('Béo phì độ II');
                }
                UserExample = valueForm;
                setShowBMI(true);
            } else {
                setShowBMI(false);
                alertCustom(title = "Bạn nhập sai chiều cao, cân nặng", msg = "Mời nhập chiều cao cân năng lớn hơn 0")
            };

            //tính calo tăng giảm cân
            switch (plan) {
                case "keep":
                    switch (gender) {
                        case 'male':
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) + 5;
                            break;
                        case "female":
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) - 161;
                    }
                    break;
                case "incre":
                    switch (gender) {
                        case "male":
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) + 5 + kilo * KILO_TO_CALO / time;
                            break;
                        case "female":
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) - 161 + kilo * KILO_TO_CALO / time;
                    }
                    break;
                case "decre":
                    switch (gender) {
                        case "male":
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) + 5 - kilo * KILO_TO_CALO / time;
                            break;
                        case "female":
                            var count2 = (valueForm.weight * 10) + (625 * valueForm.height) - (5 * valueForm.age) - 161 - kilo * KILO_TO_CALO / time;
                    }
                    break;

            }

            if (count2 >= MIN_CALO_DAY) {
                setCalo(count2);
            } else {
                alertCustom(title = "Cơ thể bạn cần tiêu thụ ít nhất 1200 calo mỗi ngày", msg = "Bạn hãy điều chỉnh lại kế hoạch giảm cân");
                setShowCalo(false);
            }
            setShowCalo(true);
        }
    }

    const alertCustom = (title, msg) =>
        Alert.alert(
            title,
            msg,
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Form
                    ref={c => t.form = c}
                    type={User}
                    value={UserExample}
                    options={options}
                />
                <Text style={styles.plan} >Giới tính</Text>
                <Picker
                    selectedValue={gender}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                    <Picker.Item label="Nam" value="male" />
                    <Picker.Item label="Nữ" value="female" />
                </Picker>
                <Text style={styles.plan} >Bạn muốn</Text>
                <Picker
                    selectedValue={plan}
                    // style={{ height: 50, width: 150 }}
                    onValueChange={((itemValue, itemIndex) => {
                        setPlan(itemValue);
                        switch (itemValue) {
                            case "keep":
                                setShowPlan(false);
                                break;
                            case "incre":
                                setShowPlan(true);
                                break;
                            case "decre":
                                setShowPlan(true);

                        }
                    })}
                >
                    <Picker.Item label="Duy trì cân nặng" value="keep" />
                    <Picker.Item label="Tăng " value="incre" />
                    <Picker.Item label="Giảm " value="decre" />

                </Picker>

                {showPlan && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={styles.plan}
                        keyboardType="numeric"
                        // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeTextKilo(text)}
                        value={kilo}
                    />
                    <Text style={styles.plan} >kg trong</Text>
                    <TextInput
                        style={styles.plan}

                        keyboardType="numeric"
                        // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => onChangeTextTime(text)}
                        value={time}
                    />
                    <Text style={styles.plan} >ngày</Text>

                </View>}


                <Button
                    title="Kiểm tra"
                    onPress={handleSubmit}
                />



                {/* { showAlertHW && alertCustom(title="Bạn nhập sai chiều cao, cân nặng", msg="Mời nhập chiều cao cân năng lớn hơn 0") }
            { showAlertCalo && alertCustom(title="Cơ thể bạn cần tiêu thụ ít nhất 1200 calo mỗi ngày", msg="Bạn hãy điều chỉnh lại kế hoạch giảm cân") } */}

                {showBMI && <Text style={styles.description} >Bạn thuộc dạng {BMI}</Text>}
                {showCalo && <Text style={styles.description} >Mỗi ngày bạn cần nạp {calo} calo</Text>}

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    description: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        alignItems: 'center'
    },
    plan: {
        fontSize: 20,
    }
});
