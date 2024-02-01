'use server'
import { signIn } from '@/auth.config';


 
// ...
 
export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', {
      redirect: false,
      ...Object.fromEntries(formData)
    });
    return 'Success'

  } catch (error) {
    return 'CredentialsSignIn';
    // if((error as any).type == 'CredentialsSignIn'){

    // }
    
    // if((error as Error).message.includes('CredentialsSignIn') ){
    // }
    // throw error;}
    // return 'Error';
  }
}


export const login = async(email:string, password:string)=>{
  try {
    await signIn('credentials',{email,password});
    return {
      ok: true
    }
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo iniciar sesion'
    }
  }


}