import * as tf from '@tensorflow/tfjs';

// Simulated historical data: [matchType, previousEngagementScore, timeOfDay]
// matchType: 0 (Classic), 1 (High Intensity), 2 (Eliminator)
const trainingData = [
  [0, 0.8, 19], [1, 0.9, 20], [0, 0.4, 15],
  [2, 0.95, 21], [1, 0.7, 18], [0, 0.2, 10]
];
const labels = [0.85, 0.92, 0.45, 0.98, 0.75, 0.25];

export async function trainPersonalizationModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 8, inputShape: [3], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  const xs = tf.tensor2d(trainingData);
  const ys = tf.tensor2d(labels, [6, 1]);

  await model.fit(xs, ys, { epochs: 50 });
  return model;
}

export async function getPersonalizedScore(model: tf.LayersModel, currentContext: number[]) {
  const input = tf.tensor2d([currentContext]);
  const prediction = model.predict(input) as tf.Tensor;
  const score = (await prediction.data())[0];
  return score;
}
