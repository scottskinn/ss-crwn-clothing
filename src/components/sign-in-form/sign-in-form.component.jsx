import { useState } from "react";
import { 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword
 } 
  from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { 
  SignInContainer,
  ButtonContainer
} from './sign-in-form.styles';

const defaultFormFields ={
  email:'',
  password:''
};


const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
  };

    const handleSubmit = async (event) => {
        event.preventDefault();
       
        try {
          const { user } = await signInAuthUserWithEmailAndPassword(
            email, 
            password
          );

          resetFormFields();
        } catch (error) {
          switch(error.code) {
            case 'auth/user-not-found':
              alert('User not found');
              break;
            case 'auth/wrong-password':
              alert('Wrong password');
              break;
            default:
              console.log(error);
          };
        }
    };
    

    const handleChange = (event) => {
        const { name, value} = event.target;
        
        setFormFields({...formFields, [name]: value}); 
    };

    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email"
                    required 
                    type='email' 
                    onChange={handleChange} 
                    name='email' 
                    value={email}
                />

                <FormInput 
                    label="Password"
                    required 
                    type='password'
                    onChange={handleChange} 
                    name='password' 
                    value={password}
                />
              <ButtonContainer>
                <Button  type='submit'>Sign In</Button>

                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
                  Google Sign In
                </Button>
              </ButtonContainer>
            </form>
        </SignInContainer>
    )
};

export default SignInForm;