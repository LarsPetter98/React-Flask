module.exports = {
    entry: {
        main: "./static/js/Main.jsx",
        loginPage: "./static/js/LoginPage.jsx",
        signupPage: "./static/js/SignupPage.jsx",
        forgotPasswordPage: "./static/js/ForgotPasswordPage.jsx",
        newPasswordPage: "./static/js/NewPasswordPage.jsx",
        loginPostRequest: "./static/js/utils/loginPostRequest.js",
        signupPostRequest: "./static/js/utils/signupPostRequest.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                loader: "file-loader",

                options: {
                    name: "[name].[ext]",
                    outputPath: "../../static/dist",
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        path: __dirname + "/static/dist",
        filename: "[name].bundle.js",
    },
};