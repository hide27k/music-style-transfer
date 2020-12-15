import Arch from './architecture.jpg';
import Noisy from './stay_gen.wav';
import DiretStyle from './stay_diret_style.wav';
import './Approach.css'

function Approach() {
  return (
    <div id="approach">
      <h2>Technical Approach </h2>
      <div id="detail">
        <h3>Problem Statement and the Original Goal</h3>
        <p>
        The original goal of our music style transfer was taking two inputs, one song as
        the one to be modified and one song to be the desired style (i.e., a pop song transferred
        into Beethoven’s style). Such automated music generation study involves multiple
        complications such as learning the style, generating the music, alternating amplitudes to
        comply with the targeted style while preserving the melody/lyrics of the original input,
        etc. Not only is this study combining polyphonic songs unprecedented, but also such an
        operation that writes a song into a different genre is even hard for humans to imagine
        and might require skilled musicians to perform some fine tuning. Therefore, taking two
        inputs and performing a style transfer on the go turns out to be more complex than
        expected. Due to limited time, we decided to train the model with the style of a certain
        song ahead of time and only take one input song to be transferred. If we want more
        styles, we will need to train the model on separate songs. We believe this is a core step
        towards the original goal of building the music style transfer.
        </p>

        <h3>Data</h3>
        <p>
        All the audio files used are in wav format because they can then directly be
        interpreted as an array of amplitudes. Since we are just training to learn the style of one
        song, we only use one song as input but the number of values are sufficient. On
        average, there are 44,100 values of amplitudes in 1 second of a song and a song is
        over 3 minutes.
        In order to train the network to learn a style/genre, we also used an additional
        dataset consisting of 10 genres with 100 songs of each genre. All the songs are
        cropped to 30 seconds. More details on how this is used in the training process will be
        included in the training section below.
        </p>

        <h3>Top-level architecture of the model</h3>
        <p>
        Our model contains 3 components. The major model samples 50 values of
        amplitudes from the input and generates the next 50 predicted values. During training,
        to learn about the style/genre of the input, we introduce a second model that is capable
        of classifying 10 different genres. This model takes 40 features of an audio file and
        outputs the predicted classification. In order to use this model, we need to supply it with
        40 features whereas our main model outputs 50 raw values of amplitudes. Hence, we
        introduce a third model that takes 50 values and extracts 40 features that are associated 
        with these values, which could then be fed into the classifier. Lastly, we
        backpropagate from the genre classifier back to the main model. A diagram for this
        architecture is shown below.
        </p>

        <div id="arch-wrapper">
          <img id="architecture" src={Arch} />
        </div>

        <h3>Detailed Architecture Design and Training</h3>
        <h4>1. Genre Classifier</h4>
        <p>
        This component takes 40 features of an audio file and classifies them into a genre. The dataset of 10 genres each with 100 songs is used to train this. Each song is cropped to 30 seconds. To extract the 40 features, we used the TorchAudio API.
It has 2 hidden layers with RELU as activation function. The loss function is cross entropy loss. This component is trained for about 30 minutes. 
        </p>

        <h4>2. Feature Extractor</h4>
        <p>
        This component takes 50 values of amplitudes and extracts 40 features. It allows the generator component to use the genre classifier. The same dataset of 10 genres is used for this component so we could reuse the features generated by the API as labels during the training. 
It has 2 fully connected layers with RELU as activation function. The loss function is MSE. This component is trained for about 20 minutes.
        </p>

        <h4>3. Generator</h4>
        <p>
        This component samples 50 amplitudes at a time from the input, and uses LSTM to output predictions of the next 50 amplitudes. Normally, the range of amplitudes is [-32728, 32728] and this would lead to big values when calculating losses and long computation time. So, before feeding the audio file into the network, the values are all normalized to be within [-1, 1]. Then, we denormalize the output by adding a fully connected layer after LSTM to restore to the common range of  amplitudes. The denormalization is necessary in order to feed the 50 values to the feature extractor. 
	The total time taken to train this component is around 20 minutes.
        </p>

        <h3>Additional Attempts and Considerations</h3>
        <p>
        1. Instead of using LSTM to predict 3 values, an initial attempt was to predict 1 value based on 50 samples. However, this strategy was too inefficient, not only it takes a long time, but also the generated output was very noisy. An illustration of the failed output is included below:
        </p>

        <audio controls>
          <source src={Noisy} />
        </audio>

        <p>
        2. A more bold attempt was to just change the input directly by comparing its features with those of the style audio. However, simply comparing and altering the input song based on the differences in the features would not produce harmony but noises. Therefore, the conclusion is that the model needs a more sophisticated extraction of the features corresponding to a style. An illustration of the failed output is included below:
        </p>

        <audio controls>
          <source src={DiretStyle} />
        </audio>

        <h3>Evaluations and Result</h3>
        <p>
        The evaluation of the output can be subjective, but our standard is to not produce output with unpleasant noises and most original elements of the input should be preserved while changes exist. In particular, the output should still be able to be identified as the input song.
        </p>
        <p>
        Our results are included in the previous demo section. The style song is “My Only Wish” and we first experimented with “Stay With Me”. We are aware that both songs are in pop style, but “My Only Wish” is very representative of a Christmas/Holiday uplifting tone whereas “Stay with Me” is more of a smooth and melancholic style. While the final output does not have a clear Holiday vibe added to it, we think this is an acceptable outcome as the melody, vocals, and major background music is preserved. Same applies for the other output generated for “Time To Love”. As mentioned before, superimposing a song with a different style might require a lot more fine tuning that could even require a nontrivial amount of work by a skilled musician. Hence, we think our model is a good starting point for a more sophisticated and powerful model in further development. 
        </p>

        <h3>Related Work and Future Direction</h3>
        <p>
        As mentioned before, music style transfer from one song to another arbitrarily is not a precedent study. We think it is more feasible to adopt a narrower range of music. For example, use piano-only music and transfer input from jazz to classical. However, there are some existing works in music and audio generation that could be applied to advance our project. 
        </p>
        <p>
        WaveNet by Oord et al. generates raw audio waveforms as synthetic utterances with input sequences recorded from human speakers using a model based on PixelCNNs [4]. Hadjeres et al. has presented DeepBach that generates chorales in the style of Johann Sebastian Bach using Keras [1]. However, unlike our approach that composes music sequentially, DeepBach uses pseudo-Gibbs sampling coupled with an adapted representation of musical data. MusicNet by Thickstun et al. presents a largely labeled dataset for classical music that consists of 34 hours of human-verified aligned recordings, and 1, 299, 329 individual labels on segments of these recordings (such as the composers, instruments used, length of each instrument playing, etc.) [3]. This could be used if we decide to focus on just transferring input into the style of classical music in a more refined manner such as adding/removing instruments during the generation. 
        </p>
        <p>
        The work described by Hadjeres et al. for developing a style imitator with successful experiments on Bach Chorales could be relevant for the future development of our model. Their model learns about neighboring note events in a given corpus, invents new chords, and harmonizes unknown melodies. It is based on the idea that “chord progressions can be generated by replicating the occurrences of pairs of neighboring notes'', and thus capturing the local “texture” of the chord sequences. When it comes to style imitation, they aimed to reproduce pairwise correlations of the training set among the notes and capture higher-order interactions suitable for style imitation [2]. Hence, we could apply similar concepts to “superimpose” the input after learning some stronger correlations among the specific notes.
        </p>
        
        <h3>Conclusion</h3>
        <p>
        Our music style transfer model consists of 3 components that learns the style of a song, takes another song as input, and outputs an altered version in correspondence to the trained style. Our experiments show that this is feasible, and our output is very close to the original version by reproducing the rhythm, melody, verses and main background sounds. We hope to extend our work to develop a more complete model that reforms a song with a new style in an artistic way while preserving its original melody. 
        </p>

        <h3>References</h3>
        <ul>
          <li>
            <p>[1] Gaetan Hadjeres and François Pachet. DeepBach: a ¨ steerable model for Bach chorales generation. arXiv preprint arXiv:1612.01010, 2016</p>
          </li>
          <li>
            <p>[2] Hadjeres, G., Sakellariou, J., Pachet, F.: Style imitation and chord invention in polyphonic music with exponential families. CoRR abs/1609.05152 (2016)</p>
          </li>
          <li>
            <p>[3] John Thickstun, Zaid Harchaoui, and Sham Kakade, “Learning features of music from scratch,” arXiv preprint arXiv:1611.09827, 2016.</p>
          </li>
          <li>
            <p>[4] Oord, Aäron Van den, and Sander Dieleman. “WaveNet: A Generative Model for Raw Audio.” Deepmind, 8 Sept. 2016, deepmind.com/blog/article/wavenet-generative-model-raw-audio.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Approach;