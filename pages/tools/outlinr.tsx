import {
	Alert,
	AppBar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	FormControlLabel,
	FormGroup,
	IconButton,
	Snackbar,
	Stack,
	Switch,
	TextField,
	Toolbar,
	Tooltip,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import { useEffect, useState } from "react";

import CloseIcon from "@material-ui/icons/Close";
import Head from "next/head";
import SettingsIcon from "@material-ui/icons/Settings";

const nameSpace = "outlinr-v2-storage";
const nameSpaceSettingsAutosave = "outlinr-v2-setting-autosave";

export default function Outlinr() {
	const [value, setValue] = useState("");
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [autoSave, setAutoSave] = useState(true);
	const [savedSnackbarOpen, setSavedSnackbarOpen] = useState(false);

	const smallDevice = useMediaQuery("screen and (max-width:720px)");

	useEffect(() => {
		const oldValue = localStorage.getItem(nameSpace);
		if (oldValue) setValue(oldValue);
		const oldAutoSaveValue = localStorage.getItem(
			nameSpaceSettingsAutosave
		);
		if (oldAutoSaveValue) setAutoSave(JSON.parse(oldAutoSaveValue));
	}, []);

	return (
		<>
			<Head>
				<title>Outlinr by Edazpotato</title>
			</Head>
			<Snackbar
				open={savedSnackbarOpen}
				onClose={() => setSavedSnackbarOpen(false)}
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				autoHideDuration={2000}
			>
				<Alert severity="info">Saved to browser storage</Alert>
			</Snackbar>
			<Dialog
				open={settingsOpen}
				onClose={() => setSettingsOpen(false)}
				fullScreen={smallDevice}
				fullWidth
				maxWidth="sm"
			>
				{smallDevice ? (
					<AppBar sx={{ position: "relative" }}>
						<Toolbar>
							<Typography
								sx={{ flex: 1 }}
								variant="h6"
								component="div"
							>
								Settings
							</Typography>
							<IconButton
								sx={{ ml: "auto" }}
								edge="end"
								color="inherit"
								onClick={() => setSettingsOpen(false)}
								aria-label="close"
							>
								<CloseIcon />
							</IconButton>
						</Toolbar>
					</AppBar>
				) : (
					<>
						<DialogTitle sx={{ m: 0, p: 2 }}>
							Settings{" "}
							<IconButton
								aria-label="close"
								onClick={() => setSettingsOpen(false)}
								sx={{
									position: "absolute",
									right: 8,
									top: 8,
								}}
							>
								<CloseIcon />
							</IconButton>
						</DialogTitle>
					</>
				)}
				<DialogContent>
					<FormGroup>
						<FormControlLabel
							control={
								<Switch
									checked={autoSave}
									onChange={(e) => {
										setAutoSave(e.target.checked);
										localStorage.setItem(
											nameSpaceSettingsAutosave,
											JSON.stringify(e.target.checked)
										);
									}}
								/>
							}
							label="Autosave"
						/>
					</FormGroup>
				</DialogContent>
				{!smallDevice && (
					<DialogActions>
						<Button onClick={() => setSettingsOpen(false)}>
							Close
						</Button>
					</DialogActions>
				)}
			</Dialog>
			<Stack
				sx={{
					// mt: 4,
					width: "100%",
					flex: "1",
				}}
			>
				<Stack
					sx={{ "& > *": { flex: "0" } }}
					direction="row"
					spacing={2}
					justifyContent="flex-end"
				>
					{!autoSave && (
						<Button
							onClick={() => {
								localStorage.setItem(nameSpace, value);
								setSavedSnackbarOpen(true);
							}}
						>
							Save
						</Button>
					)}
					<Tooltip title="Settings">
						<IconButton
							sx={{ ml: "auto" }}
							// edge="end"
							onClick={() => setSettingsOpen(true)}
						>
							<SettingsIcon />
						</IconButton>
					</Tooltip>
				</Stack>
				<TextField
					fullWidth
					multiline
					label={`Type something here, and ${
						autoSave
							? "it will be saved automaticaly!"
							: "press the save button to save it."
					}`}
					id="outlinr-textfield"
					rows={17}
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						if (autoSave)
							localStorage.setItem(nameSpace, e.target.value);
					}}
				/>
			</Stack>
		</>
	);
}
