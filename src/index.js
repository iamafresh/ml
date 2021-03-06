'use strict';

const mlCart = require('ml-cart');
const mlRandomForest = require('ml-random-forest');

const ML = exports;

// Try to keep this list in the same structure as the README.

// Unsupervised learning
ML.PCA = require('ml-pca');
ML.HClust = require('ml-hclust');
ML.KMeans = require('ml-kmeans');

// Supervised learning
ML.SVM = require('ml-svm');
ML.NaiveBayes = require('ml-naivebayes');
ML.KNN = require('ml-knn');
ML.PLS = require('ml-pls');
ML.CrossValidation = require('ml-cross-validation');
ML.ConfusionMatrix = require('ml-confusion-matrix');
ML.DecisionTreeClassifier = mlCart.DecisionTreeClassifier;
ML.RandomForestClassifier = mlRandomForest.RandomForestClassifier;

// Artificial neural networks
ML.FNN = require('ml-fnn');
ML.SOM = require('ml-som');

// Regression
const Regression = require('ml-regression');
ML.SimpleLinearRegression = Regression.SimpleLinearRegression;
ML.PolynomialRegression = Regression.PolynomialRegression;
ML.MultivariateLinearRegression = Regression.MultivariateLinearRegression;
ML.PowerRegression = Regression.PowerRegression;
ML.ExponentialRegression = Regression.ExponentialRegression;
ML.TheilSenRegression = Regression.TheilSenRegression;
ML.RobustPolynomialRegression = Regression.RobustPolynomialRegression;
ML.DecisionTreeRegression = mlCart.DecisionTreeRegression;
ML.RandomForestRegression = mlRandomForest.RandomForestRegression;

// Optimization
ML.levenbergMarquardt = require('ml-levenberg-marquardt');

// Math
const Matrix = require('ml-matrix');
ML.Matrix = Matrix.Matrix;
ML.SVD = Matrix.SVD;
ML.EVD = Matrix.EVD;
ML.CholeskyDecomposition = Matrix.CholeskyDecomposition;
ML.LuDecomposition = Matrix.LuDecomposition;
ML.QrDecomposition = Matrix.QrDecomposition;

ML.SparseMatrix = require('ml-sparse-matrix');
ML.Kernel = require('ml-kernel');
ML.Distance = require('ml-distance').distance;
ML.Similarity = require('ml-distance').similarity;
ML.distanceMatrix = require('ml-distance-matrix');
ML.XSadd = require('ml-xsadd').default;

// Statistics
ML.Performance = require('ml-performance');

// Data preprocessing
ML.savitzkyGolay = require('ml-savitzky-golay');
ML.savitzkyGolayGeneralized = require('ml-savitzky-golay-generalized');

// Utility
ML.BitArray = require('ml-bit-array');
ML.HashTable = require('ml-hash-table');
ML.padArray = require('ml-pad-array');
ML.binarySearch = require('binary-search');
ML.numSort = require('num-sort');
ML.Random = require('ml-random').default;

// Undocumented/deprecated packages
ML.ArrayUtils = require('ml-array-utils');
ML.Regression = require('ml-regression');
ML.MatrixUtil = require('ml-matrix');
ML.ArrayStat = require('ml-stat').array;
ML.MatrixStat = require('ml-stat').matrix;

ML.Array = {
  min: require('ml-array-min').default,
  max: require('ml-array-max').default,
  median: require('ml-array-median').default,
  mean: require('ml-array-mean').default,
  mode: require('ml-array-mode').default,
  rescale: require('ml-array-rescale').default,
  standardDeviation: require('ml-array-standard-deviation').default,
  variance: require('ml-array-variance').default
};

ML.ArrayXY = {
  centroidsMerge: require('ml-array-xy-centroids-merge').default,
  closestX: require('ml-arrayxy-closestx').default,
  maxMerge: require('ml-array-xy-max-merge').default,
  maxY: require('ml-array-xy-max-y').default,
  sortX: require('ml-array-xy-sort-x').default,
  uniqueX: require('ml-arrayxy-uniquex').default,
  weightedMerge: require('ml-array-xy-weighted-merge').default
};
