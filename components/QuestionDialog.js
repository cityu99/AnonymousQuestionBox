import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Alert from "@mui/material/Alert";

export default function QuestionDialog(props) {
    const { open, onClose, onSubmit } = props;
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (...args) => {
        if (content.replace(/\s/g, "") === "") {
            setError(true);
            return;
        }
        if (content.toLowerCase().includes("test") || content.includes("测试")) {
            setError(true);
            return;
        }
        onSubmit(content);
        setContent("");
        onClose(...args);
    };

    const handleClose = (...args) => {
        onClose(...args);
    };

    return (
        <div style={{ position: "fixed" }}>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>意見</DialogTitle>
                <DialogContent>
                    <Alert severity="warning">
                        <strong>
                            您的意見在收到答復後
                            <br/>
                            将會出現在此頁
                        </strong>
                    </Alert>
                    <TextField
                        fullWidth
                        error={error}
                        value={content}
                        onInput={(e) => {
                            setContent(e.target.value);
                        }}
                        rows={4}
                        multiline
                        margin="dense"
                        id="content"
                        label="意見內容"
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>取消</Button>
                    <Button onClick={handleSubmit}>提交</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
