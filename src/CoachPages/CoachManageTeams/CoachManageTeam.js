import React, { useState } from "react";
import Navbar from "../../CoachComponents/NavBar";
import Footer from "../../GuestComponents/Footer";
import { sports as initialSports } from "../../Data/SportsData";

function CoachManageTeams() {
    const [sports, setSports] = useState([...initialSports]);
    const [selectedSportIndex, setSelectedSportIndex] = useState(null);
    const [selectedTeamIndex, setSelectedTeamIndex] = useState(null);

    const [showSportModal, setShowSportModal] = useState(false);
    const [showTeamModal, setShowTeamModal] = useState(false);

    const [newSportName, setNewSportName] = useState("");
    const [newSportImg, setNewSportImg] = useState("");

    const [teamForm, setTeamForm] = useState({ name: "", members: [] });
    const [editingTeamIndex, setEditingTeamIndex] = useState(null);

    // Add or Update Sport
    const handleAddSport = () => {
        if (!newSportName) return;
        setSports([...sports, { name: newSportName, img: newSportImg, teams: [] }]);
        setNewSportName("");
        setNewSportImg("");
        setShowSportModal(false);
    };

    // Open Add Team Modal
    const openAddTeamModal = () => {
        setTeamForm({ name: "", members: [] });
        setEditingTeamIndex(null);
        setShowTeamModal(true);
    };

    // Open Edit Team Modal
    const openEditTeamModal = (teamIdx) => {
        setTeamForm({ ...sports[selectedSportIndex].teams[teamIdx] });
        setEditingTeamIndex(teamIdx);
        setShowTeamModal(true);
    };

    // Save Team (Add or Update)
    const handleSaveTeam = () => {
        if (!teamForm.name) return;
        const updatedSports = [...sports];
        if (editingTeamIndex !== null) {
            // Update existing team
            updatedSports[selectedSportIndex].teams[editingTeamIndex] = teamForm;
        } else {
            // Add new team
            updatedSports[selectedSportIndex].teams.push(teamForm);
        }
        setSports(updatedSports);
        setShowTeamModal(false);
    };

    // Remove Team
    const handleRemoveTeam = (teamIdx) => {
        const updatedSports = [...sports];
        updatedSports[selectedSportIndex].teams.splice(teamIdx, 1);
        setSports(updatedSports);
        setSelectedTeamIndex(null);
    };

    // Add Member
    const handleAddMember = (member) => {
        setTeamForm({
            ...teamForm,
            members: [...teamForm.members, member],
        });
    };

    // Update Member
    const handleUpdateMember = (memberIdx, updatedMember) => {
        const membersCopy = [...teamForm.members];
        membersCopy[memberIdx] = updatedMember;
        setTeamForm({ ...teamForm, members: membersCopy });
    };

    // Remove Member
    const handleRemoveMember = (memberIdx) => {
        const membersCopy = [...teamForm.members];
        membersCopy.splice(memberIdx, 1);
        setTeamForm({ ...teamForm, members: membersCopy });
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20 pb-10 bg-gray-50 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Coach Manage Teams</h1>
                        <p className="mt-2 text-gray-600 dark:text-gray-400">
                            Manage your teams: add new sports, create or edit teams, and update team members. All changes can be reviewed by the admin.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 flex-wrap mb-6">
                        <button
                            onClick={() => setShowSportModal(true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Add Sport
                        </button>
                        <button
                            onClick={openAddTeamModal}
                            className="px-4 py-2 bg-green-600 text-white rounded"
                            disabled={selectedSportIndex === null}
                        >
                            Add Team
                        </button>
                    </div>

                    {/* Sports List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {sports.map((sport, sportIdx) => (
                            <div
                                key={sportIdx}
                                className={`p-4 rounded-lg shadow-md cursor-pointer ${selectedSportIndex === sportIdx ? "border-2 border-blue-500" : "border"}`}
                                onClick={() => { setSelectedSportIndex(sportIdx); setSelectedTeamIndex(null); }}
                            >
                                <div className="h-32 bg-cover bg-center rounded mb-2" style={{ backgroundImage: `url(${sport.img})` }}></div>
                                <p className="font-semibold text-gray-900">{sport.name}</p>

                                {selectedSportIndex === sportIdx && (
                                    <ul className="mt-2">
                                        {sport.teams.map((team, teamIdx) => (
                                            <li key={teamIdx} className="flex justify-between items-center bg-gray-100 rounded p-2 mt-1">
                                                <span
                                                    className="cursor-pointer"
                                                    onClick={() => setSelectedTeamIndex(teamIdx)}
                                                >
                                                    {team.name}
                                                </span>
                                                <div className="flex gap-1">
                                                    <button
                                                        className="text-sm text-blue-600"
                                                        onClick={() => openEditTeamModal(teamIdx)}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="text-sm text-red-600"
                                                        onClick={() => handleRemoveTeam(teamIdx)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Team Modal */}
                    {showTeamModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-lg w-96">
                                <h3 className="text-xl font-semibold mb-4">
                                    {editingTeamIndex !== null ? "Edit Team" : "Add Team"}
                                </h3>
                                <input
                                    className="w-full p-2 mb-3 border rounded"
                                    placeholder="Team Name"
                                    value={teamForm.name}
                                    onChange={(e) => setTeamForm({ ...teamForm, name: e.target.value })}
                                />

                                {/* Members Section */}
                                <div className="mb-3">
                                    <h4 className="font-semibold mb-1">Members</h4>
                                    <ul className="space-y-1 max-h-40 overflow-y-auto border p-2 rounded">
                                        {teamForm.members.map((member, idx) => (
                                            <li key={idx} className="flex justify-between items-center">
                                                <span>{member.name} ({member.role})</span>
                                                <div className="flex gap-1">
                                                    <button
                                                        className="text-blue-600 text-sm"
                                                        onClick={() => {
                                                            const name = prompt("Edit Name:", member.name);
                                                            const role = prompt("Edit Role:", member.role);
                                                            const faculty = prompt("Edit Faculty:", member.faculty);
                                                            const year = prompt("Edit Year:", member.year);
                                                            handleUpdateMember(idx, { name, role, faculty, year });
                                                        }}
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        className="text-red-600 text-sm"
                                                        onClick={() => handleRemoveMember(idx)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="mt-2 px-3 py-1 bg-green-600 text-white rounded"
                                        onClick={() => {
                                            const name = prompt("Member Name:");
                                            const role = prompt("Role:");
                                            const faculty = prompt("Faculty:");
                                            const year = prompt("Year:");
                                            handleAddMember({ name, role, faculty, year });
                                        }}
                                    >
                                        Add Member
                                    </button>
                                </div>

                                <div className="flex justify-end gap-2">
                                    <button className="px-3 py-1 bg-gray-400 rounded" onClick={() => setShowTeamModal(false)}>Cancel</button>
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleSaveTeam}>Save</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add Sport Modal */}
                    {showSportModal && (
                        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-lg w-96">
                                <h3 className="text-xl font-semibold mb-4">Add New Sport</h3>
                                <input
                                    className="w-full p-2 mb-3 border rounded"
                                    placeholder="Sport Name"
                                    value={newSportName}
                                    onChange={(e) => setNewSportName(e.target.value)}
                                />
                                <input
                                    className="w-full p-2 mb-3 border rounded"
                                    placeholder="Image URL"
                                    value={newSportImg}
                                    onChange={(e) => setNewSportImg(e.target.value)}
                                />
                                <div className="flex justify-end gap-2">
                                    <button className="px-3 py-1 bg-gray-400 rounded" onClick={() => setShowSportModal(false)}>Cancel</button>
                                    <button className="px-3 py-1 bg-blue-600 text-white rounded" onClick={handleAddSport}>Add</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default CoachManageTeams;
