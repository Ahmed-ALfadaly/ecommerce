var path = require("path");
var HtmlWebpackPlugin=require("html-webpack-plugin");
var MiniCssExtractPlugin=require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports={

    entry: {
app:'./src/index.js'
    },
    output: {
        path: path.join(__dirname,"/dist"),
        filename: "main.js",
        publicPath: '/',
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
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: '[name].[ext]',
                            outputPath: "fonts",
                            esModule: false,
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader, 
                    options: {
                      publicPath: '../' 
                    }
                  },
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
    

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
  
    plugins: [
        // ...
        
        // الآن نحن لسنا بحاجة إلى السطر التالي ويجب إزالته
        // new OptimizeCssAssetsPlugin({}),
    ],
    plugins:[
        new HtmlWebpackPlugin({
            filename:"index.html",
            template:"./src/index.html",
        }),
        new MiniCssExtractPlugin({filename:"./css/style.css"}),

    ],

};

