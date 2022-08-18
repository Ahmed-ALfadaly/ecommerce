var path = require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var MiniCssExtractPlugin=require("mini-css-extract-plugin");
var OptimizeCssAssetsPlugin=require("optimize-css-assets-webpack-plugin");

module.exports={

    entry: {
app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "main.js"
    },
    mode:"development",

devServer:{
    hot: false,
    static:path.join(__dirname,"/dist"),
    port:1239,
    open:true,
    devMiddleware: {
        writeToDisk: true,
      },
},

    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                        options:{
                            minimize:true,
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
            use:[
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
    
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                      },
                  },
                ],
              },

              {
                test: require.resolve("jquery"),
                loader: "expose-loader",
                options: {
                  exposes: ["$", "jQuery"],
                },
              },
        ]
    },


    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
        }),
        new MiniCssExtractPlugin({filename:"./css/style.css"}),
        new OptimizeCssAssetsPlugin({}),
    ],

};

