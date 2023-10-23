import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Otp = () => {
    const et1 = useRef();
    const et2 = useRef();
    const et3 = useRef();
    const et4 = useRef();
    const et5 = useRef();
    const et6 = useRef();

    const [f1, setF1] = useState()
    const [f2, setF2] = useState()
    const [f3, setF3] = useState()
    const [f4, setF4] = useState()
    const [f5, setF5] = useState()
    const [f6, setF6] = useState()
    const [count, setCount] = useState(60)
    useEffect(() => {
        const interval = setInterval(() => {
            if (count == 0) {
                clearInterval(interval)
            }
            else {
                setCount(count - 1)
            }

        }, 1000);
        return () => { clearInterval(interval) }
    }, [count])
    const otpValidate = () => {
        let otp = '123456'
        let enteredOtp = f1 + f2 + f3 + f4 + f5 + f6
        if (enteredOtp == otp) {
            Alert.alert("OTP Matched")
        }
        else {
            Alert.alert("Wrong OTP")


        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Otp Varification</Text>
            <View style={styles.otpView}>
                <TextInput
                    ref={et1}
                    value={f1}
                    style={[styles.inputView, { borderColor: (f1 && f1.length >= 1) >= 1 ? 'red' : 'black' }]}

                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF1(txt)
                        if (txt.length >= 1) {
                            et2.current.focus();
                        } else if (txt.length < 1) {
                            et1.current.focus();
                        }
                    }} />
                <TextInput
                    ref={et2}
                    value={f2}
                    style={[styles.inputView, { borderColor: (f2 && f2.length >= 1) >= 1 ? 'red' : 'black' }]}

                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF2(txt)
                        if (txt.length >= 1) {
                            et3.current.focus();
                        } else if (txt.length < 1) {
                            et1.current.focus();
                        }
                    }} />
                <TextInput
                    ref={et3}
                    value={f3}
                    style={[styles.inputView, { borderColor: (f3 && f3.length >= 1) >= 1 ? 'red' : 'black' }]}

                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF3(txt)
                        if (txt.length >= 1) {
                            et4.current.focus();
                        } else if (txt.length < 1) {
                            et2.current.focus();
                        }
                    }} />
                <TextInput
                    ref={et4}
                    value={f4}
                    style={[styles.inputView, { borderColor: (f4 && f4.length >= 1) >= 1 ? 'red' : 'black' }]}

                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF4(txt)
                        if (txt.length >= 1) {
                            et5.current.focus();
                        } else if (txt.length < 1) {
                            et3.current.focus();
                        }
                    }} />
                <TextInput
                    ref={et5}
                    value={f5}
                    style={[styles.inputView, { borderColor: (f5 && f5.length >= 1) >= 1 ? 'red' : 'black' }]}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF5(txt)
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et4.current.focus();
                        }
                    }} />
                <TextInput
                    ref={et6}
                    value={f6}
                    style={[styles.inputView, { borderColor: (f6 && f6.length >= 1) >= 1 ? 'red' : 'black' }]}
                    keyboardType='number-pad'
                    maxLength={1}
                    onChangeText={txt => {
                        setF6(txt)
                        if (txt.length >= 1) {
                            et6.current.focus();
                        } else if (txt.length < 1) {
                            et5.current.focus();
                        }
                    }}
                />
            </View>
            <View style={styles.resendView}>
                <Text style={{ fontSize: 20, fontWeight: '700', color: count == 0 ? 'blue' : 'gray' }}
                    onPress={() => {
                        setCount(60)
                    }}>Resend</Text>
                {count !== 0 && (<Text style={{ marginLeft: 20, fontSize: 20 }}>{count + ' seconds'}</Text>
                )}
            </View>
            <TouchableOpacity

                onPress={() => otpValidate()} disabled={f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== '' && f6 !== '' ? false : true}
                style={[styles.verifyOtp, { backgroundColor: f1 !== '' && f2 !== '' && f3 !== '' && f4 !== '' && f5 !== '' && f6 !== '' ? 'blue' : 'gray' }]}>
                <Text style={styles.buttonText}>Verify OTP</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Otp

const styles = StyleSheet.create
    ({
        container:
        {
            flex: 1
        },
        title:
        {
            fontSize: 22,
            fontWeight: '700',
            marginTop: 100,
            alignSelf: 'center',
            color: '#000'

        },
        otpView:
        {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 100,
            marginRight: 35

        },
        inputView:
        {
            width: 40,
            height: 40,
            borderWidth: 0.5,
            borderRadius: 10,
            marginLeft: 10,
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '700'

        },
        verifyOtp:
        {
            flexDirection: 'row',
            height: 55,
            width: 100,
            backgroundColor: 'blue',
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',

        },
        buttonText:
        {
            color: 'white',
            fontSize: 15,
        },
        resendView:
        {
            flexDirection: 'row',
            alignSelf: 'center',
            marginTop: 30,
            marginBottom: 30
        }
    })