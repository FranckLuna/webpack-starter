const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /style\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
            {
                test: /\.(png|svg|jpggif)$/,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns:[
                {from: 'src/assets', to: 'assets/'}
            ]
        }),
        new CleanWebpackPlugin(),
    ]

};
