# Inspire Me

GitSearch-Quotes is simply an Angular App that uses Github API to retrieve user data. Submit a username and it gives you repository details of the user, including number of repositories, commits and branches and also when it was last updated. It also has a quotes platform where you can add your favorite quotes in it. It includes a button to delete a quote that you don't find appropriate. You can also upvote or devote a quote based on your personal opinion about it. A quote with most likes will be highlighted. It will also give you the time since the quote has been created.

## Requirements

Both the CLI and the project have dependecies that require Node together with NPM. So make sure you have these installed and working before proceeding.

##### Technologies Used

- This project was generated with Angular CLI version 13.3.2
- HTML & CSS (Bootstrap)

##### Setup Instructions and Installation

- Clone this repository to a location in your file system.
- Open terminal command line then navigate to the root folder of the application.
- Run `ng serve` command.
- Navigate to `http://localhost:4200/` in your browser.


## Behaviour Driven Development

##### Quotes

1. Displays an error message if you leave the quote input field blank
   - INPUT: " " 
   - OUTPUT: "Enter the quote" 
2. Displays an error message if you leave the author field blank
   - INPUT: " " 
   - OUTPUT: "Enter the name of the author"
3. Displays an option to delete a quote
   - INPUT: "Delete button of a quote pressed" 
   - OUTPUT: "That particular quote from a list of quotes is deleted"
4. Display an option to UpVote a quote if you like it
   - INPUT: "Press INSPIRATIONAL Button"
   - OUTPUT: "UpVote property of a quote increments by 1" 
5. Display an option to DownVote a quote if you dislike it
   - INPUT: "Press TERRIBLE Button"
   - OUTPUT: "DownVote property of a quote increments by 1" 


## Development
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:
- Fork the repo
- Create a new branch (git checkout -b improve-feature)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (git commit -am 'Improve feature')
- Push to the branch (git push origin improve-feature)
- Create a Pull Request


## Known Bugs
There are no known bugs


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##### Link to Live Site : [https://JoyleneKirui.github.io/InspireMe/](https://JoyleneKirui.github.io/InspireMe/)

### License

*MIT*
Copyright (c) 2022 **Joylene Kirui**

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.# InspireMe
