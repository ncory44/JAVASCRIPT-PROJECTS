//creates an object to keep track of values.
const Calculator = {
    //this will display 0 on the calculator screen.
    Display_Value: '0',
    //this will hold the first operand for any expressions, we set it to null for now.
    First_Operand: null,
    //this checks whether or not the second operand has been inputted by the user
    Wait_Second_Operand: false,
    //this will hold the operator, we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked on
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //this checks if the Wait_Second_Operand is true and sets Display_Value to the key that was clicked on
    if (Wait_second_operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //this overwrites Display_Value if the current value is 0, otherwise it adds onto it
        Calculator.Display_Value = Display_Value === ')' ? digit : Display_Value + digit;
    }
}