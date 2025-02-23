const dfd = require("danfojs-node")
const readline = require('node:readline');

// This function prints out the choices a user can pick and opens readline for inputs
function main() {
   while(true) {
      console.log("Please pick one: ")
      console.log("1. Analyze female food identities")
      console.log("2. Generate Visualization")
      console.log("3. Analyze male food identities")
      console.log("4. Generate Visualization 2")
      console.log("5. Exit Program")
      const rl = readline.createInterface({
         input: process.stdin,
         output: process.stdout,
       });
       rl.question(`Pick a number`, name => {
         if (name === "1") {
            console.log(`${gender()}`);
            rl.close();
         }
         else if (name === "2") {
            console.log(`great choice ${name}!`);
            rl.close();
         }
         else if (name === "3") {
            console.log(`${gender2()}`);
            rl.close();
         }
         else if (name === "4") {
            console.log(`nice choice ${name}!`);
            rl.close();
         }
         else if (name === "5") {
            console.log(`goodbye!`);
            rl.close();
         }
       });
      break
   }
   
}
main()

// This function filters out the gender and food identity column to show how many women are in each food identity.
function gender() {
   dfd.readCSV("/Users/student/Desktop/Engineering-Practicum/Data_project_HTML/Data/Dietary Habits Survey Data.csv")
      .then(df => {
         const selectedColumnsDf = df.loc({ columns: ["What would best describe your diet:", "Gender"] });
         sub_df = selectedColumnsDf.loc({rows: selectedColumnsDf["Gender"].eq("Female")})
         const grouped = sub_df.groupby(["What would best describe your diet:"]).count();
         grouped.rename({ "Gender_count": "Number", "What would best describe your diet:": "Identity" }, { inplace: true });
         grouped.print();

      })
      .catch(err => console.error(err));
};

// This function also filters out the gender and food identity column but shows how many men are in each food identity.
function gender2() {
   dfd.readCSV("/Users/student/Desktop/Engineering-Practicum/Data_project_HTML/Data/Dietary Habits Survey Data.csv")
      .then(df => {
         const selectedColumnsDf = df.loc({ columns: ["What would best describe your diet:", "Gender"] });
         sub_df = selectedColumnsDf.loc({rows: selectedColumnsDf["Gender"].eq("Male")})
         const grouped = sub_df.groupby(["What would best describe your diet:"]).count();
         grouped.rename({ "Gender_count": "Number", "What would best describe your diet:": "Identity" }, { inplace: true });
         grouped.print();

      })
      .catch(err => console.error(err));
};