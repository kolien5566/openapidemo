import { Timeline } from "antd";
import React from "react";

const App: React.FC = () => {
  return (
    <>
    <h1>Changelog</h1>
        <Timeline
          mode={"right"}
          items={[
            {
              label: "2024-09-01",
              children: "        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id         nisl nec lacus mattis facilisis eu in purus. Praesent dignissim dolor et         dictum placerat. Ut iaculis tellus vitae ultricies commodo. Mauris         cursus libero in auctor varius. Vestibulum justo nisi, posuere ut rutrum         a, scelerisque vitae ipsum. Phasellus tempor vel magna ac rhoncus. Ut         fermentum tellus vel leo pellentesque, vel imperdiet nisi congue. Fusce         tortor tortor, condimentum et elit a, viverra mattis nisi. Phasellus         nisi purus, malesuada malesuada fringilla ut, aliquet sed ligula.         Quisque vestibulum nibh at elit facilisis tincidunt. Quisque vel lacinia         odio. Donec posuere augue eget velit tincidunt feugiat. Donec viverra         efficitur mi a faucibus. Phasellus et luctus leo. Nam mollis lacinia         mauris sit amet consequat.",
            },
            {
              label: "2024-08-01",
              children: "Sed consectetur nunc augue, vitae aliquet orci gravida quis. Fusce         faucibus mi velit, sit amet viverra arcu ornare id. Ut consectetur         congue molestie. Vestibulum a est a est elementum commodo. Nulla nec         laoreet ex. Nulla lobortis laoreet nisi, laoreet tempor enim cursus et.         Vivamus sagittis congue lorem vel dapibus. Sed nec neque tempor,         accumsan ante a, rutrum felis.",
            },
            {
              label: "2024-07-01",
              children: "Duis aliquet, enim a fermentum efficitur, metus ligula elementum tortor,         sed facilisis augue odio vitae purus. Ut mattis lectus vitae tempor         efficitur. Nullam non convallis mi. Vestibulum volutpat neque et         accumsan pretium. Aliquam vehicula nulla ac pulvinar mattis. Praesent         aliquet auctor enim, at ornare ex tristique id. In tincidunt magna eu         purus tincidunt vestibulum. Etiam elementum nulla eget diam efficitur,         quis congue metus porta. Mauris sit amet dui ultricies magna rhoncus         fringilla. Aenean dapibus elit in leo tincidunt, eget tempor est         porttitor.",
            },
          ]}
        />
    </>
  );
};

export default App;
