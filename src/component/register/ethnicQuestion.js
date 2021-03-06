import React from 'react';
import { stylesCommon } from '../styles/styleCommon';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import {
    STR_QUESTION_ETHINC,
    STR_BACK,
    STR_CONTINUE,
    STR_ERROR,
    STR_ANNONCE_TRYING,
    ErrorRegisterScreen,
} from '../../utils/constantstring';
import SingleDropDown from '../styles/customModal/SingleDropDown';
import { DATA_TEST_ETHINC } from '../../utils/constantstring';
import { myHeight } from '../../utils/dimension';
import ModelRegister from '../../model/ModelRegister';
import { ColorCustom } from '../../utils/color';
import LoadingIndicator from '../styles/loadingIndicator';

function EthenicQuestion(props) {
    const { visibleError, setVisibleError, showLoading } = props;
    const backScreen = () => {
        props.backScreen();
    };

    const nextScreen = () => {
        if (isOpenPanel) {
            return;
        }
        props.nextScreen();
    };
    let isOpenPanel = false;
    const getData = () => {
        return [
            props.questionAnswers.map(ans => {
                return { id: ans.id, text: ans.name };
            }),
        ];
    };

    const _renderErrorView = () => {
        if (visibleError) {
            return (
                <View style={styles.containerError}>
                    <Text style={styles.textError}>
                        {ErrorRegisterScreen.STR_ERROR_SELECT}{' '}
                    </Text>
                    <Text style={styles.textAnnonce}>{STR_ANNONCE_TRYING} </Text>
                </View>
            );
        } else {
            return null;
        }
    };

    const handlerSelect = selection => {
        if (selection.length && selection[0].id) {
            props.setSelectedId(selection[0].id);
            isOpenPanel = false;
            setVisibleError(false);
        } else {
            isOpenPanel = true;
            setVisibleError(true);
        }
    };

    const renderSingleDropdown = () => {
        if (showLoading) {
            return <LoadingIndicator />;
        } else {
            return (
                <SingleDropDown
                    bgColor={ColorCustom.BLACK}
                    tintColor={ColorCustom.WHITE}
                    activityTintColor={ColorCustom.MAIN_COLOR_BLUE}
                    optionTextStyle={{
                        color: 'white',
                        textAlign: 'center',
                        alignSelf: 'center',
                        width: '100%',
                        height: '100%',
                        backgroundColor: ColorCustom.BLACK,
                    }}
                    handler={selection => {
                        handlerSelect(selection);
                    }}
                    data={getData()}
                    maxHeight={(myHeight * 28) / 100}
                />
            );
        }
    };

    return (
        <View style={styles.container}>
            <Text style={stylesCommon.titleQuestionStyle}>{STR_QUESTION_ETHINC}</Text>

            <View style={{ flex: 1 }}>
                <View style={{ height: 64 }} />
                {renderSingleDropdown()}
            </View>

            {_renderErrorView()}
            <TouchableOpacity style={stylesCommon.backButton} onPress={backScreen}>
                <Text style={stylesCommon.titleButtonStyleBack}>{STR_BACK}</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={stylesCommon.continueButton}
                onPress={nextScreen}>
                <Text style={stylesCommon.titleButtonContinue}>{STR_CONTINUE}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: '100%',
    },

    containerError: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 0,
        height: '50%',
    },

    textError: {
        width: '56%',
        marginTop: '10%',
        fontSize: 16,
        color: 'white',
        alignSelf: 'center',
    },

    textAnnonce: {
        width: '100%',
        fontSize: 16,
        color: '#cc6600',
        textAlign: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default EthenicQuestion;
