export const emailRules = [
  (v) => !!v || "Email must be required",
  (v) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(v) || "Email address must be valid";
  },
];


export const passwordRules = [
  (v) => !!v || "Password must be required",
  (v) => {
    if(v.length < 5){
      return "Password length must be larger than 6 character"
    }
  }
]