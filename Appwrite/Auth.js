import { Client ,Account ,ID} from 'appwrite';
import conf from "../src/conf"
class AuthService {

client = new Client()
account

constructor(){
this.client
.setEndpoint("https://cloud.appwrite.io/v1")
.setProject("660fc1de9580f5fc4ba6")

// .setEndpoint(conf.Appwriteurl)
// .setProject(conf.prjectId)

this.account = new Account(this.client)
}

//signup methord 

async CreateUser (data){
    try {
        
         const {email ,phone , name , password} = data 
         
  const userAccount  = await   this.account.create(ID.unique(),email ,password ,name ,phone )
       //const userAccount =    await   this.account.create(ID.unique() ,email ,password ,name ,phone)
if(userAccount){
    
    return userAccount 
}

    } catch (error) {
        console.log("ERROR IN SIGNUP", error)
        return "Wrong email does not match"
    }
}

//login methord 
 async LoginAccount(data){
    try {
        const {email , password} = data 
        const resopnse = await this.account.createEmailSession(email ,password)
        if(resopnse){
            return resopnse
        }
    } catch (error) {
        console.log("ERROR IN LOGIN METHORD ", error)
        return "wrong passoword "
    }
 }


 //logout 

 async Logout (){
    try {
        return this.account.deleteSession(this.account)
    } catch (error) {
        console.log("ERROR IN LOGOUT", error)
    }
 }

 //getcurrent user 

 async GetcurrentUser (){
   try {
    const user = this.account.get()

    if(user){
        return user
    }
   } catch (error) {
    console.log("ERROR IN GETCURRENT USER", error )
   }
 }



}

const authservice = new AuthService

export default authservice




