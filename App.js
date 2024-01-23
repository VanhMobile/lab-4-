import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  Button,
  Image,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [soThuNhat, setsoThuNhat] = useState(0);
  const [soThuHai, setsoThuHai] = useState(0);
  const [ketQua, setKetQua] = useState(0);
  const [showModal, setshowModal] = useState(false);
  const [showModal2, setshowModal2] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.tieuDe}>Lab 3 Máy tính điện tử</Text>
      <Text style={styles.soHoc}>số học </Text>
      <Text style={styles.soHoc}>{ketQua}</Text>
      <TextInput
        placeholder="số thứ nhất :  "
        style={styles.inPut}
        onChangeText={(value) => setsoThuNhat(value)}
        value={soThuNhat}></TextInput>
      <TextInput
        placeholder="số thứ hai : "
        style={styles.inPut}
        onChangeText={(value) => setsoThuHai(value)}
        value={soThuHai}></TextInput>

      <Modal
        animationType="slide"
        visible={showModal}
        transparent={true}
        onRequestClose={() => {
          setshowModal(false);
        }}>
        <View style={styles.khung}>
          <View style={styles.dialog}>
            <Text> kết quả của phép chia : </Text>
            <Text>{parseFloat(soThuNhat) / parseFloat(soThuHai)} </Text>
            <Button title="Đóng dialog" onPress={() => setshowModal(false)} />
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        visible={showModal2}
        transparent={true}
        onRequestClose={() => {
          setshowModal2(false);
        }}>
        <View style={styles.khung}>
          <View style={styles.dialog}>
            <Text>Nguyễn Việt Anh</Text>
            <Text>Ngành lập trình mobile</Text>
            <Text>Quê Phúc Thọ</Text>
            <Text>18/05/2003</Text>
            <Text>PH35035</Text>
            <Image style={styles.anh} source={require("./img/and.png")} />
            <Button title="Đóng dialog" onPress={() => setshowModal2(false)} />
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.Pressable2}>
        <Pressable>
          <Text
            style={styles.dau}
            onPress={() => {
              setKetQua(parseFloat(soThuNhat) + parseFloat(soThuHai));
            }}>
            +
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={styles.dau}
            onPress={() =>
              Alert.alert(
                "kết quả phép trừ : ",
                parseFloat(soThuNhat) - parseFloat(soThuHai) + ""
              )
            }>
            -
          </Text>
        </Pressable>

        <Pressable>
          <Text
            style={styles.dau}
            onPress={() =>
              console.log(parseFloat(soThuNhat) * parseFloat(soThuHai))
            }>
            *
          </Text>
        </Pressable>

        <Pressable>
          <Text style={styles.dau} onPress={() => setshowModal(true)}>
            /
          </Text>
        </Pressable>
      </TouchableOpacity>

      <TouchableOpacity style={styles.but}>
        <Button
          title="SHOW"
          color="#841584"
          onPress={() => setshowModal2(true)}>
          {" "}
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tieuDe: {
    textAlign: "center",
    fontSize: 28,
    padding: 15,
    borderColor: "red",
    borderWidth: 1,
    margin: 10,
    backgroundColor: "#FF00FF",
  },
  soHoc: {
    textAlign: "center",
    fontSize: 28,
  },
  inPut: {
    marginTop: 40,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 28,
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 10,
  },
  Pressable2: {
    flexDirection: "row",
  },
  dau: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#0033FF",
    backgroundColor: "#6699FF",
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  khung: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)", // dùng cái này để có nền mờ
    // opacity: 0.6 // bỏ cái này để đỡ bị mờ nội dung
  },
  dialog: {
    width: 300,
    backgroundColor: "#FFFF",
    padding: 10,
    borderRadius: 10,
  },
  anh: {
    height: 80,
    width: 80,
  },
  but: {
    marginTop: 40,
    marginHorizontal: 50,
  },
});
